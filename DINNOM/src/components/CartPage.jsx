import React from 'react';
import { useCart } from '../context/useCart';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map(item => (
              <li key={item.id} className="flex justify-between items-center border-b pb-2">
                <div>
                  <strong>{item.name}</strong> (x{item.quantity})
                </div>
                <div className="flex gap-4 items-center">
                  <span>${item.price * item.quantity}</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-xl font-semibold">Total: ${total.toFixed(2)}</div>
          <button
            onClick={clearCart}
            className="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default CartPage;
