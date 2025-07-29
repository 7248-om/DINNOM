import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems = [], totalAmount = 0, coupon = null, discountAmount = 0 } = location.state || {};

  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [error, setError] = useState('');

  const user = JSON.parse(localStorage.getItem('user')) || null;

  const handleChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in shippingAddress) {
      if (!shippingAddress[key]) {
        setError('Please fill all fields.');
        return;
      }
    }

    if (!user || cartItems.length === 0 || totalAmount <= 0) {
      setError('Missing user or cart data.');
      return;
    }

    navigate('/payment', {
      state: {
        orderInfo: {
          cartItems,
          shippingAddress,
          totalAmount: parseInt(totalAmount),
          coupon,
          discountAmount,
        },
      },
    });
  };

  return (
    <div className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        {['address', 'city', 'postalCode', 'country'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={shippingAddress[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            required
            className="w-full border px-4 py-2 rounded"
          />
        ))}

        <div className="text-right mt-4">
          <p className="text-gray-700">Total Amount: ₹{totalAmount}</p>
          {discountAmount > 0 && (
            <p className="text-green-600 text-sm">Discount: ₹{discountAmount} applied</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
};

export default Checkout;
