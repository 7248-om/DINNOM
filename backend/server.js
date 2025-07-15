import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import admin from 'firebase-admin'; 

import authRoutes from './auth.js';
import { protect } from './middleware/authMiddleware.js';
import User from './models/User.js';
import Order from './models/order.js';
import Product from './models/product.js';
import serviceAccount from './serviceAccountKey.json' with { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const PORT = 5050;

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/dinnom';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json(['diya', 'nidhi', 'om', 'nihar']);
});

// Add this GET endpoint to fetch the wishlist
app.get('/api/wishlist', protect, async (req, res) => {
  try {
    // We use req.user.id from the protect middleware, not a query param
    const user = await User.findById(req.user.id).populate('wishlist');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ wishlist: user.wishlist });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post('/api/wishlist', protect, async (req, res) => {
  const { product } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user.id }, 
      { $addToSet: { wishlist: product } },
      { new: true }
    );
    res.json(user.wishlist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.post('/api/bill', protect, async (req, res) => {
  const { bill } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.user.id },
      { $push: { bill } },
      { new: true }
    );
    res.json(user.bill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/orders', protect, async (req, res) => {
  const { orderItems, shippingAddress, totalAmount } = req.body;

  if (!orderItems || orderItems.length === 0) {
    return res.status(400).json({ message: 'No order items' });
  }

  try {
    const order = new Order({
      orderItems,
      shippingAddress,
      totalAmount,
      user: req.user.id,
    });

    const createdOrder = await order.save();

    // Optionally, you can add the order ID to the user's document
    await User.findByIdAndUpdate(req.user.id, {
        $push: { orders: createdOrder._id }
    });

    res.status(201).json(createdOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/products', protect, async (req, res) => {
  // Note: In a real app, you'd want admin-only authorization here.
  try {
    // Use the `Product` model to create a new product from the request body
    const product = new Product(req.body);
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (err) {
    // Send a 400 Bad Request for validation errors
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});