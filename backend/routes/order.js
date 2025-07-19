import express from 'express';
import Order from '../models/order.js';
import Cart from '../models/cart.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';
import { getAllOrders } from '../controllers/orderController.js';

const router = express.Router();

// 🛒 POST /api/orders - Create order from saved cart
router.post('/', protect, async (req, res) => {
  try {
    const userId = req.user.id;

    console.log('📦 CHECKOUT triggered for user:', userId);

    const cart = await Cart.findOne({ userId }).populate('items.productId');
    console.log('🧺 Fetched Cart:', JSON.stringify(cart, null, 2));

    if (!cart || cart.items.length === 0) {
      console.log('🚫 Cart missing or empty');
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const { shippingAddress } = req.body;
    if (!shippingAddress || !shippingAddress.address) {
      return res.status(400).json({ message: 'Shipping address is required' });
    }

    const orderItems = cart.items.map(item => ({
      productId: item.productId._id,
      name: item.productId.name,
      quantity: item.quantity,
      price: item.productId.price,
      selectedSize: item.selectedSize,
    }));

    const totalAmount = orderItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

    const order = new Order({
      user: userId,
      orderItems,
      shippingAddress,
      totalAmount,
    });

    await order.save();

    cart.items = [];
    await cart.save();

    res.status(201).json({
      message: 'Order placed successfully',
      orderId: order._id,
    });
  } catch (err) {
    console.error('❌ Error placing order:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// 📦 GET /api/orders/admin/orders - Get all orders (admin only)
router.get('/admin/orders', protect, adminOnly, getAllOrders);

export default router;
