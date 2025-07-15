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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});