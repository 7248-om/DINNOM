import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import admin from 'firebase-admin'; 

import authRoutes from './routes/auth.js';
// Correct JSON import with assert for ES modules
import fs from 'fs';
import cartRoutes from './routes/cart.js';
import orderRoutes from './routes/order.js';
import productRoutes from './routes/product.js';
//import wishlistRoutes from './routes/wishlistRoutes.js';
import chatbotRoutes from './routes/chatbot.js';

// Initialize Firebase Admin SDK from environment variable on Vercel, or from file locally
if (!admin.apps.length) {
  const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT_JSON
    ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_JSON)
    : JSON.parse(fs.readFileSync(new URL('./serviceAccountKey.json', import.meta.url)));

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

const app = express();

const MONGO_URI = process.env.MONGODB_URI;

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
//app.use('/api/wishlist', wishlistRoutes);
app.use('/api/chatbot', chatbotRoutes);

app.get('/api', (req, res) => {
  res.json(['diya', 'nidhi', 'om', 'nihar']);
});

// This is only for local development. Vercel will handle the server.
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5050;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
