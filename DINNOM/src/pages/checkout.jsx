import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Checkout = () => {
  const navigate = useNavigate();

  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [error, setError] = useState('');
  const [addresses, setAddresses] = useState([]);
  const { user, token } = useAuth();

  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  useEffect(() => {
    const fetchAddresses = async () => {
      if (!user || !token) {
        toast.error('Please login to fetch addresses');
        return;
      }

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/addresses`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setAddresses(data);
        } else {
          throw new Error('Failed to fetch addresses');
        }
      } catch (error) {
        console.error('Error fetching addresses:', error);
        toast.error('Failed to load addresses');
      }
    };

    fetchAddresses();
  }, [user, token]);

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
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Select Address
          </label>
          <select
            onChange={(e) => {
              const selectedAddress = addresses.find(addr => addr._id === e.target.value);
              setShippingAddress(selectedAddress);
            }}
            className="w-full border px-3 py-2 rounded-md"
            required
          >
            <option value="">Select an Address</option>
            {addresses.map((address) => (
              <option key={address._id} value={address._id}>
                {address.address}, {address.city}, {address.state} {address.postalCode}, {address.country}
              </option>
            ))}
          </select>
        </div>

        {['address', 'city', 'postalCode', 'country'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={shippingAddress[field] || ''}
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
