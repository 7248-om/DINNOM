const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const PORT = 5050;

const MONGO_URI = 'mongodb://localhost:27017'; 

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json(['diya', 'nidhi', 'om', 'nihar']);
});

// Add to wishlist
app.post('/api/wishlist', async (req, res) => {
  const { email, product } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { $addToSet: { wishlist: product } },
      { upsert: true, new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add bill
app.post('/api/bill', async (req, res) => {
  const { email, bill } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { $push: { bill } },
      { upsert: true, new: true }
    );
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});