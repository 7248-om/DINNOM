import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [error, setError] = useState('');
  const [updating, setUpdating] = useState(false);
  const token = localStorage.getItem('token');

  const fetchCart = async () => {
    try {
      const res = await axios.get('http://localhost:5050/api/cart', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch cart');
    }
  };

  // ✅ Update quantity absolutely (not incrementally)
  const updateQuantity = async (productId, selectedSize, newQty) => {
    if (newQty <= 0) return;
    try {
      setUpdating(true);
      await axios.post(
        'http://localhost:5050/api/cart/add',
        {
          productId,
          selectedSize,
          quantity: newQty,
          absolute: true, // 🔥 ensures fixed value
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      await fetchCart();
    } catch (err) {
      console.error(err);
      setError('Error updating quantity');
    } finally {
      setUpdating(false);
    }
  };

  const removeItem = async (productId, selectedSize) => {
    try {
      setUpdating(true);
      await axios.delete('http://localhost:5050/api/cart/remove', {
        headers: { Authorization: `Bearer ${token}` },
        data: { productId, selectedSize },
      });
      await fetchCart();
    } catch (err) {
      console.error(err);
      setError('Failed to remove item');
    } finally {
      setUpdating(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  if (!cart) return <div className="p-8">Loading cart...</div>;
  if (cart.items.length === 0) return <div className="p-8">Your cart is empty.</div>;

  const total = cart.items.reduce(
    (acc, item) => acc + item.productId.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      {error && <p className="text-red-500">{error}</p>}

      {cart.items.map((item) => (
        <div
          key={item.productId._id + item.selectedSize}
          className="flex items-center justify-between border-b py-4"
        >
          <div className="flex gap-4 items-center">
            <img
              src={item.productId.mainImage}
              alt={item.productId.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <p className="font-medium">{item.productId.name}</p>
              <p>Size: {item.selectedSize}</p>
              <p>Price: ₹{item.productId.price}</p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <button
              disabled={updating}
              onClick={() =>
                updateQuantity(item.productId._id, item.selectedSize, item.quantity - 1)
              }
              className="px-3 py-1 border rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              disabled={updating}
              onClick={() =>
                updateQuantity(item.productId._id, item.selectedSize, item.quantity + 1)
              }
              className="px-3 py-1 border rounded"
            >
              +
            </button>
            <button
              disabled={updating}
              onClick={() => removeItem(item.productId._id, item.selectedSize)}
              className="text-red-600 underline ml-4"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="text-right text-xl font-bold">Total: ₹{total}</div>

      <div className="text-right">
        <button className="bg-black text-white px-6 py-2 rounded-full">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
