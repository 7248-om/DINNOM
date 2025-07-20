import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import admin from 'firebase-admin'; 
import adminRoutes from './routes/admin.js';


import authRoutes from './routes/auth.js';
// Correct JSON import with assert for ES modules
import fs from 'fs';
const serviceAccount = JSON.parse(fs.readFileSync(new URL('./serviceAccountKey.json', import.meta.url)));

import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/order.js';
import productRoutes from './routes/product.js';
//import wishlistRoutes from './routes/wishlistRoutes.js';
import chatbotRoutes from './routes/chatbot.js';

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
app.use('/admin', adminRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
//app.use('/api/wishlist', wishlistRoutes);
app.use('/api/chatbot', chatbotRoutes);

app.get('/', (req, res) => {
  res.json(['diya', 'nidhi', 'om', 'nihar']);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
