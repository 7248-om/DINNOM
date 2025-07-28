import Order from '../models/order.js';
import Cart from '../models/cart.js';

/**
 * @desc    Create new order
 * @route   POST /api/orders
 * @access  Private
 */
export const createOrder = async (req, res) => {
  try {
    const { shippingAddress } = req.body;

    if (!shippingAddress || !shippingAddress.address || !shippingAddress.city || !shippingAddress.postalCode || !shippingAddress.country) {
      return res.status(400).json({ message: 'Shipping address is required and must be complete' });
    }

    const cart = await Cart.findOne({ userId: req.user._id }).populate('items.productId');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cannot create order from an empty cart' });
    }

    const orderItems = cart.items.map(item => {
      if (!item.productId) {
        // This can happen if a product is deleted while in a user's cart.
        throw new Error(`Product with ID ${item.productId} not found.`);
      }
      return {
        productId: item.productId._id,
        name: item.productId.name,
        quantity: item.quantity,
        price: item.productId.price,
        image: item.productId.mainImage, // Correctly use mainImage from product model
        selectedSize: item.selectedSize,
      };
    });

    const totalAmount = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const order = new Order({
      userId: req.user._id,
      items: orderItems,
      shippingAddress,
      totalAmount,
      status: 'Processing', // As requested
    });

    const createdOrder = await order.save();

    // Clear the cart after order is created
    cart.items = [];
    await cart.save();

    res.status(201).json(createdOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Server error while creating order.' });
  }
};

/**
 * @desc    Get logged in user orders
 * @route   GET /api/orders/myorders
 * @access  Private
 */
export const getMyOrders = async (req, res) => {
  try {
    // Find orders for the logged in user and sort by most recent
    const orders = await Order.find({ userId: req.user._id }).sort({ orderDate: -1 });
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};

/**
 * @desc    Cancel an order by user
 * @route   PUT /api/orders/:id/cancel
 * @access  Private
 */
export const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Ensure the user owns the order
    if (order.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized to cancel this order' });
    }

    if (order.status === 'Shipped' || order.status === 'Delivered') {
        return res.status(400).json({ message: 'Cannot cancel an order that has already been shipped or delivered.' });
    }

    order.status = 'Cancelled';
    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } catch (error) {
    console.error('Error cancelling order:', error);
    res.status(500).json({ message: 'Server error while cancelling order' });
  }
};
