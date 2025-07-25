import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [error, setError] = useState('');

  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const user = JSON.parse(localStorage.getItem('user')) || null;

  const totalAmount = parseInt(
  cartItems.reduce((acc, item) => {
    const price = parseFloat(item?.productId?.price ?? 0);
    const quantity = parseInt(item?.quantity ?? 1);
    return acc + price * quantity;
  }, 0)
);




  const handleChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate fields
    for (const key in shippingAddress) {
      if (!shippingAddress[key]) {
        setError('Please fill all fields.');
        return;
      }
    }
    console.log("🧾 Cart Items Full:", cartItems);
    console.log("👤 User:", user);
console.log("🛒 Cart Items:", cartItems);
console.log("💰 Total Amount:", totalAmount);

    if (!user || cartItems.length === 0 || totalAmount <= 0) {
      setError('Missing user or cart data.');
      return;
    }

if (isNaN(totalAmount)) {
  alert('Something went wrong calculating total');
  return;
}

navigate('/payment', {
  state: {
    orderInfo: {
      cartItems,
      shippingAddress,
      totalAmount: parseInt(totalAmount), // ✅ Ensure it's a number
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
