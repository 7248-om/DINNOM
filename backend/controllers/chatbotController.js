import axios from 'axios';
import Product from '../models/product.js';

/**
 * @desc    Handle chatbot query
 * @route   POST /api/chatbot
 * @access  Public
 */
export const handleChat = async (req, res) => {
  const { query } = req.body;
  const { OLLAMA_API_URL, OLLAMA_MODEL } = process.env;

  if (!query) {
    return res.status(400).json({ message: 'Query is required.' });
  }

  // Guard clause in case the server starts without the .env variables
  if (!OLLAMA_API_URL || !OLLAMA_MODEL) {
    console.error(
      'Chatbot is not configured. Please set OLLAMA_API_URL and OLLAMA_MODEL in your .env file.'
    );
    return res.status(500).json({
      message: 'Chatbot service is not configured on the server.',
    });
  }

  try {
    // New: Fetch all unique tags to provide as context to the AI.
    const allTags = await Product.distinct('tags');

    // 1. Parse the user's query to extract relevant keywords, handling possessives like "women's".
    const stopWords = new Set(['a', 'an', 'the', 'is', 'in', 'on', 'for', 'of', 'with', 'do', 'you', 'have', 'any', 'what', 'are', 'can', 'i', 'get', 's']);
    const keywords = query.toLowerCase().split(' ').map(w => w.replace(/['’]s$/, '')).filter(word => !stopWords.has(word) && word.length > 1);

    if (keywords.length === 0) {
      return res.json({ reply: "I'm sorry, I couldn't understand your request. Could you please be more specific about what you're looking for?" });
    }

    // New: Detect gender keywords to create a specific filter.
    const genderFilter = {};
    const maleKeywords = new Set(['men', 'man', 'male', 'boy', 'boys']);
    const femaleKeywords = new Set(['women', 'woman', 'female', 'girl', 'girls']);
    let genderDetected = false;

    const searchKeywords = keywords.filter(keyword => {
      if (maleKeywords.has(keyword)) {
        genderFilter.gender = 'Male';
        genderDetected = true;
        return false; // Remove from search keywords
      }
      if (femaleKeywords.has(keyword)) {
        genderFilter.gender = 'Female';
        genderDetected = true;
        return false; // Remove from search keywords
      }
      return true;
    });

    let products = [];
    let foundIds = new Set();

    // If there are no specific keywords but a gender was found, search just by gender.
    if (searchKeywords.length === 0 && genderDetected) {
        products = await Product.find(genderFilter).limit(5).lean();
    } else if (searchKeywords.length > 0) {
        // 2. Prioritize search by tags for better relevance.
        const tagRegexes = searchKeywords.map(k => new RegExp(`^${k}$`, 'i'));
        const productsFromTags = await Product.find({ ...genderFilter, tags: { $in: tagRegexes } }).limit(5).lean();

        foundIds = new Set(productsFromTags.map(p => p._id.toString()));
        products = [...productsFromTags];

        // 3. If we don't have enough results, broaden the search to other fields.
        if (products.length < 5) {
            const searchRegex = new RegExp(searchKeywords.join('|'), 'i');
            const otherProducts = await Product.find({
                _id: { $nin: Array.from(foundIds) }, // Exclude products already found
                ...genderFilter,
                $or: [ { name: { $regex: searchRegex } }, { description: { $regex: searchRegex } }, { category: { $regex: searchRegex } } ],
            }).limit(5 - products.length).lean();
            products = products.concat(otherProducts);
        }
    }

    // ✅ Debug log to see if products are being found
    console.log(`Found ${products.length} products for query: "${query}"`);
    if (products.length > 0) {
      console.log('Found products:', products.map(p => p.name));
    }

    // 4. Construct a detailed prompt for the AI with the product data.
    const productInfo =
      products.length > 0
        ? JSON.stringify(
            products.map(p => ({
              name: p.name,
            _id: p._id, // Add the product ID to the context
              description: p.description,
              price: p.price,
              category: p.category,
              gender: p.gender, // Add gender to context
              tags: p.tags, // Add the product's own tags to the context
            })),
            null,
            2
          )
        : 'No products found matching the query.';

    const prompt = `You are a helpful e-commerce assistant for a store called DINNOM. Your goal is to help users find products.
    Answer the user's query based ONLY on the following product information and context.
    When you mention a product, ALWAYS create a markdown link for it. The link format is: Product Name. You MUST use the _id from the context for the PRODUCT_ID.
    If the information isn't available in the context provided, say that you don't have enough information to answer. Be friendly and concise.

    AVAILABLE TAGS for all products: ${allTags.join(', ')}

    PRODUCT CONTEXT:
    ${productInfo}

    USER'S QUERY:
    ${query}`;

    // 5. Call the local Ollama AI API and send the response.
    const ollamaResponse = await axios.post(OLLAMA_API_URL, {
      model: OLLAMA_MODEL,
      prompt: prompt,
      stream: false, // We want the full response at once
    });

    const reply = ollamaResponse.data.response;
    res.json({ reply: reply.trim() });
  } catch (error) {
    // Provide more specific feedback if the Ollama server is not reachable.
    if (error.code === 'ECONNREFUSED') {
      console.error('Chatbot Error: Connection to Ollama server failed. Is Ollama running?');
      return res.status(500).json({ message: 'The AI service is currently unavailable.' });
    }

    console.error('Error with chatbot:', error);
    res.status(500).json({ message: 'Something went wrong on our end.' });
  }
};
