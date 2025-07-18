// routes/cart.js
import express from 'express';
import Cart from '../models/cart.js';
import Product from '../models/product.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// ADD or UPDATE quantity
router.post('/add', protect, async (req, res) => {
  const { productId, selectedSize, quantity, absolute } = req.body;
  const userId = req.user._id;

  try {
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) =>
        item.productId.equals(productId) && item.selectedSize === selectedSize
    );

    if (existingItem) {
      if (absolute) {
        existingItem.quantity = quantity; // ✅ Set quantity directly
      } else {
        existingItem.quantity += quantity;
      }
    } else {
      cart.items.push({ productId, selectedSize, quantity });
    }

    await cart.save();
    res.status(200).json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ message: 'Error adding to cart' });
  }
});

// FETCH cart
router.get('/', protect, async (req, res) => {
  const userId = req.user._id;

  try {
    const cart = await Cart.findOne({ userId }).populate('items.productId');
    res.status(200).json(cart || { items: [] });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch cart' });
  }
});

// REMOVE item
router.delete('/remove', protect, async (req, res) => {
  const { productId, selectedSize } = req.body;
  const userId = req.user._id;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(
      (item) =>
        !(item.productId.equals(productId) && item.selectedSize === selectedSize)
    );

    await cart.save();
    res.status(200).json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ message: 'Failed to remove item' });
  }
});

export default router;
