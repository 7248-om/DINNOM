import express from 'express';
import Order from '../models/order.js';
import { protect } from '../middleware/authMiddleware.js'; // ✅ correct
import Cart from '../models/cart.js';

const router = express.Router();

// 🛒 POST /api/orders - Create order from cart
router.post('/', protect, async (req, res) => {
  try {
    const userId = req.user.id;

    // Get cart for user
    const cart = await Cart.findOne({ user: userId }).populate('items.productId');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // Extract shippingAddress from request
    const { shippingAddress } = req.body;
    if (!shippingAddress || !shippingAddress.address) {
      return res.status(400).json({ message: 'Shipping address is required' });
    }

    // Create orderItems array
    const orderItems = cart.items.map((item) => ({
      productId: item.productId._id,
      name: item.productId.name,
      quantity: item.quantity,
      price: item.productId.price,
    }));

    const totalAmount = orderItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

    // Create and save order
    const order = new Order({
      user: userId,
      orderItems,
      shippingAddress,
      totalAmount,
    });

    await order.save();

    // Clear cart after placing order
    cart.items = [];
    await cart.save();

    res.status(201).json({ message: 'Order placed successfully', orderId: order._id });
  } catch (err) {
    console.error('Error placing order:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
