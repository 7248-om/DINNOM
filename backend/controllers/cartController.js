import Cart from '../models/cart.js';

export const addToCart = async (req, res) => {
  const userId = req.user._id;
  const { productId, quantity } = req.body;

  if (!productId || quantity < 1) {
    return res.status(400).json({ message: 'Invalid product or quantity' });
  }

  let cart = await Cart.findOne({ user: userId });

  if (!cart) {
    cart = new Cart({ user: userId, items: [] });
  }

  const itemIndex = cart.items.findIndex(item => item.productId.equals(productId));

  if (itemIndex > -1) {
    // Update quantity
    cart.items[itemIndex].quantity += quantity;
  } else {
    // Add new item
    cart.items.push({ productId, quantity });
  }

  await cart.save();
  res.status(200).json(cart);
};

export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate('items.productId');
  if (!cart) return res.status(200).json({ items: [] });
  res.status(200).json(cart);
};

export const removeFromCart = async (req, res) => {
  const { productId } = req.params;
  const cart = await Cart.findOne({ user: req.user._id });

  if (!cart) return res.status(404).json({ message: 'Cart not found' });

  cart.items = cart.items.filter(item => !item.productId.equals(productId));
  await cart.save();

  res.status(200).json(cart);
};

export const clearCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });

  if (cart) {
    cart.items = [];
    await cart.save();
  }

  res.status(200).json({ message: 'Cart cleared' });
};
