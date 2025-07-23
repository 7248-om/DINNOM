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
    // 1. Parse the user's query to extract keywords for a more flexible search.
    const stopWords = new Set(['a', 'an', 'the', 'is', 'in', 'on', 'for', 'of', 'with', 'do', 'you', 'have', 'any']);
    const keywords = query.toLowerCase().split(' ').filter(word => !stopWords.has(word) && word.length > 1);

    // Create a regex to match any of the keywords, case-insensitively.
    const searchRegex = new RegExp(keywords.join('|'), 'i');

    // 2. Search for relevant products using a regex query.
    // This method is more flexible and doesn't rely on a specific text index.
    const products = await Product.find({
      $or: [
        { name: { $regex: searchRegex } },
        { description: { $regex: searchRegex } },
        { category: { $regex: searchRegex } },
        { tags: { $regex: searchRegex } } // $regex on an array field checks each element
      ]
    })
      .limit(5)
      .lean(); // Use .lean() for faster, plain JS object results

    // ✅ Debug log to see if products are being found
    console.log(`Found ${products.length} products for query: "${query}"`);
    if (products.length > 0) {
      console.log('Found products:', products.map(p => p.name));
    }

    // 3. Construct a detailed prompt for the AI with the product data.
    const productInfo =
      products.length > 0
        ? JSON.stringify(
            products.map(p => ({
              name: p.name,
            _id: p._id, // Add the product ID to the context
              description: p.description,
              price: p.price,
              category: p.category,
            })),
            null,
            2
          )
        : 'No products found matching the query.';

    const prompt = `You are a helpful e-commerce assistant for a store called DINNOM.
    Answer the user's question based ONLY on the following product information.
    When you mention a product, ALWAYS include a markdown link to it. The link format is: Product Name. You MUST use the _id from the context for the PRODUCT_ID.
    If the information isn't available in the context provided, say that you don't have enough information to answer. Be friendly and concise.
.

    CONTEXT:
    ${productInfo}

    USER'S QUESTION:
    ${query}`;

    // 4. Call the local Ollama AI API and send the response.
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
