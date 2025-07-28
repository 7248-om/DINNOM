import express from 'express';
import { createOrder, getMyOrders, cancelOrder } from '../controllers/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

// All routes in this file are protected
router.use(protect);

// POST /api/orders - Create a new order
// GET  /api/orders/myorders - Get user's orders
router.route('/').post(createOrder);
router.route('/myorders').get(getMyOrders);

// PUT /api/orders/:id/cancel - Cancel an order
router.route('/:id/cancel').put(cancelOrder);

export default router;
