import { useState, useEffect } from 'react';
import axios from 'axios';
import { CartContext } from './CartContext';

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('/api/cart', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data.items);
    } catch (err) {
      console.error('Error fetching cart:', err);
    }
  };

  const addToCart = async (productId, selectedSize, quantity = 1) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        '/api/cart/add',
        { productId, selectedSize, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setCart(res.data.cart.items);
    } catch (err) {
      console.error('Error adding to cart:', err);
    }
  };

  const removeFromCart = async (productId, selectedSize) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.delete('/api/cart/remove', {
        headers: { Authorization: `Bearer ${token}` },
        data: { productId, selectedSize },
      });
      setCart(res.data.cart.items);
    } catch (err) {
      console.error('Error removing from cart:', err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
