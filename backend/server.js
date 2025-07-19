import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// ✅ Firebase Admin is now properly imported (initialized once)
import admin from './firebaseAdmin.js';

import adminRoutes from './routes/admin.js';
import authRoutes from './routes/auth.js';
import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/order.js';
import productRoutes from './routes/product.js';
// import wishlistRoutes from './routes/wishlistRoutes.js';
import chatbotRoutes from './routes/chatbot.js';

const app = express();
const PORT = 5050;

const MONGO_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/dinnom';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected!'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

// ✅ Route registrations
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
// app.use('/api/wishlist', wishlistRoutes);
app.use('/api/chatbot', chatbotRoutes);

app.get('/', (req, res) => {
  res.json(['diya', 'nidhi', 'om', 'nihar']);
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
