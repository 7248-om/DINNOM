import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { user, token } = useAuth();

  const [shippingAddress, setShippingAddress] = useState({
    name: user?.displayName || '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'India',
    phone: '',
  });
  const [error, setError] = useState('');
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  useEffect(() => {
    const fetchAddresses = async () => {
      if (!user || !token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/addresses', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setAddresses(data);
          const defaultAddress = data.find(addr => addr.isDefault);
          if (defaultAddress) {
            setShippingAddress(defaultAddress);
          }
        } else {
          throw new Error('Failed to fetch addresses');
        }
      } catch (error) {
        console.error('Error fetching addresses:', error);
        toast.error('Failed to load addresses');
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [user, token]);

  const totalAmount = cartItems.reduce((acc, item) => {
    const price = parseFloat(item?.productId?.price ?? 0);
    const quantity = parseInt(item?.quantity ?? 1);
    return acc + price * quantity;
  }, 0);

  const handleChange = (e) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate fields
    const requiredFields = ['name', 'address', 'city', 'state', 'postalCode', 'country', 'phone'];
    for (const key of requiredFields) {
      if (!shippingAddress[key]) {
        const errorMessage = `Please fill all fields. Missing: ${key.charAt(0).toUpperCase() + key.slice(1)}`;
        setError(errorMessage);
        toast.error(errorMessage);
        return;
      }
    }

    if (!user || cartItems.length === 0 || totalAmount <= 0) {
      setError('Missing user or cart data.');
      toast.error('Your cart is empty.');
      return;
    }

    if (isNaN(totalAmount)) {
      setError('Something went wrong calculating total');
      toast.error('Something went wrong calculating total');
      return;
    }

    navigate('/payment', {
      state: {
        orderInfo: {
          cartItems,
          shippingAddress,
          totalAmount: totalAmount,
        },
      },
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Checkout</h1>

        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
          {error && <p className="text-red-500 mb-4 bg-red-50 p-3 rounded-md">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-6">
            {addresses.length > 0 && (
              <div className="mb-6">
                <label htmlFor="address-select" className="block text-sm font-medium text-gray-700 mb-2">
                  Select a saved address
                </label>
                <select
                  id="address-select"
                  onChange={(e) => {
                    if (e.target.value) {
                      const selectedAddress = addresses.find(addr => addr._id === e.target.value);
                      if (selectedAddress) {
                        setShippingAddress(selectedAddress);
                      }
                    }
                  }}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option value="">-- Or enter a new address below --</option>
                  {addresses.map((address) => (
                    <option key={address._id} value={address._id}>
                      {address.name} - {address.address}, {address.city}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {addresses.length === 0 && !loading && (
              <div className="text-center p-4 border-2 border-dashed rounded-lg">
                <p className="text-gray-600">You have no saved addresses.</p>
                <Link to="/profile/addresses" className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Add an address to your profile
                </Link>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" name="name" value={shippingAddress.name || ''} onChange={handleChange} required className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={shippingAddress.phone || ''} onChange={handleChange} required className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <textarea id="address" name="address" value={shippingAddress.address || ''} onChange={handleChange} required rows="3" className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" id="city" name="city" value={shippingAddress.city || ''} onChange={handleChange} required className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input type="text" id="state" name="state" value={shippingAddress.state || ''} onChange={handleChange} required className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />

              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">Postal Code</label>
                <input type="text" id="postalCode" name="postalCode" value={shippingAddress.postalCode || ''} onChange={handleChange} required className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input type="text" id="country" name="country" value={shippingAddress.country || ''} onChange={handleChange} required className="mt-1 w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
              </div>
            </div>

            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
