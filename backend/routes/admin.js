// routes/admin.js
import express from 'express';
import Order from '../models/order.js';
import { protect, adminOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

// 👑 GET /api/admin/orders - fetch all orders
router.get('/orders', protect, adminOnly, async (req, res) => {
  try {
    const orders = await Order.find().populate('user', 'name email');
    res.status(200).json(orders);
  } catch (err) {
    console.error('❌ Failed to get orders:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ✅ PATCH /api/admin/orders/:id - update order status
router.patch('/orders/:id', protect, adminOnly, async (req, res) => {
  try {
    const { status } = req.body;
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.status = status;
    await order.save();

    res.json({ message: 'Status updated', updatedOrder: order });
  } catch (err) {
    console.error('❌ Error updating status:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ❌ Optional: delete order
router.delete('/orders/:id', protect, adminOnly, async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Order not found' });
    res.json({ message: 'Order deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
