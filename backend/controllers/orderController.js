// controllers/orderController.js
import Order from '../models/order.js';

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate('user', 'email displayName') // include user info
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
