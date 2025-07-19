import express from 'express';
import Order from '../models/order.js';
import { protect } from '../middleware/authMiddleware.js';
import Cart from '../models/cart.js';

const router = express.Router();

// 🛒 POST /api/orders - Create order from saved cart
router.post('/', protect, async (req, res) => {
  try {
    const userId = req.user.id;

    // ✅ Debug log
    console.log('📦 CHECKOUT triggered for user:', userId);

    // 🧺 Find user's cart
    const cart = await Cart.findOne({ userId }).populate('items.productId');

    // ✅ Debug cart content
    console.log('🧺 Fetched Cart:', JSON.stringify(cart, null, 2));

    // 🔒 Validate cart
    if (!cart || cart.items.length === 0) {
      console.log('🚫 Cart missing or empty');
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const { shippingAddress } = req.body;

    // 🔒 Validate shipping
    if (!shippingAddress || !shippingAddress.address) {
      return res.status(400).json({ message: 'Shipping address is required' });
    }

    // 🧾 Prepare order items
    const orderItems = cart.items.map(item => ({
      productId: item.productId._id,
      name: item.productId.name,
      quantity: item.quantity,
      price: item.productId.price,
      selectedSize: item.selectedSize,
    }));

    // 💵 Calculate total
    const totalAmount = orderItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );

    // 📝 Create and save order
    const order = new Order({
      user: userId,
      orderItems,
      shippingAddress,
      totalAmount,
    });

    await order.save();

    // 🧹 Clear cart
    cart.items = [];
    await cart.save();

    // ✅ Response
    res.status(201).json({
      message: 'Order placed successfully',
      orderId: order._id,
    });
  } catch (err) {
    console.error('❌ Error placing order:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
