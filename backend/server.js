import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import admin from 'firebase-admin'; 

import authRoutes from './routes/auth.js';
import { protect } from './middleware/authMiddleware.js';
import User from './models/user.js';
import Order from './models/order.js';
import Product from './models/product.js';
// Correct JSON import with assert for ES modules
import fs from 'fs';
const serviceAccount = JSON.parse(fs.readFileSync(new URL('./serviceAccountKey.json', import.meta.url)));

import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/order.js';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();
const PORT = 5050;

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/dinnom';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req, res) => {
  res.json(['diya', 'nidhi', 'om', 'nihar']);
});

// Wishlist GET
app.get('/api/wishlist', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('wishlist');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ wishlist: user.wishlist });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Wishlist POST
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

// Bill POST
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

// Orders POST
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

    await User.findByIdAndUpdate(req.user.id, {
      $push: { orders: createdOrder._id }
    });

    res.status(201).json(createdOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Products GET all
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Products GET by ID
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

// Products POST (create)
app.post('/api/products', protect, async (req, res) => {
  try {
    const product = new Product(req.body);
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Products PUT (update)
app.put('/api/products/:id', protect, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Products DELETE
app.delete('/api/products/:id', protect, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
