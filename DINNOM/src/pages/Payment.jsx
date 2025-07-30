import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { orderInfo } = location.state || {};
  const [loading, setLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!orderInfo) {
      console.log('❌ Missing order info, redirecting...');
      setTimeout(() => navigate('/'), 100);
    }
  }, [orderInfo, navigate]);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        console.log('✅ Razorpay script loaded');
        resolve(true);
      };
      script.onerror = () => {
        console.error('❌ Razorpay script failed to load');
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleRazorpayPayment = async () => {
    if (!orderInfo || isNaN(orderInfo.totalAmount)) {
      alert('❌ Invalid order total amount. Redirecting...');
      navigate('/');
      return;
    }

    setLoading(true);
    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert('Razorpay SDK failed to load');
      setLoading(false);
      return;
    }

    try {
      const rawAmount = parseInt(orderInfo.totalAmount);
      const amount = rawAmount > 0 ? rawAmount : 1; // Razorpay requires at least ₹1
      console.log('📦 Creating Razorpay order for:', amount);

      const { data: order } = await axios.post(
        '/api/payment/create-order',
        { amount },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const options = {
        key: 'rzp_test_jtlBNyV6SL0IYF',
        amount: order.amount.toString(),
        currency: 'INR',
        name: 'DINNOM Fashion',
        description: 'Order Payment',
        order_id: order.id,
        handler: async (response) => {
  navigate('/success'); // go immediately

  // optional: log verification in background
  try {
    await axios.post('/api/payment/verify', {
      ...response,
      ...orderInfo,
      userId: user._id,
    }, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (err) {
    console.warn('⚠️ Verification failed (test mode):', err.response?.data || err.message);
  }
},

        prefill: {
          name: user?.name || '',
          email: user?.email || '',
        },
        theme: {
          color: '#121212',
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error('❌ Razorpay order creation failed:', err.response?.data || err.message);
      alert('Payment initiation failed');
    } finally {
      setLoading(false);
    }
  };

  const handleCOD = async () => {
    if (!orderInfo || !orderInfo.shippingAddress) {
      alert('❌ Shipping address missing.');
      return;
    }

    try {
      const { data } = await axios.post(
        '/api/orders',
        {
          shippingAddress: orderInfo.shippingAddress,
          items: orderInfo.items,
          totalAmount: orderInfo.totalAmount,
          paymentMethod: 'COD',
          userId: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log('✅ COD order placed:', data);
      confirm('Order placed successfully! Click OK to continue.');
      navigate('/success');
    } catch (error) {
      console.error('❌ COD order error:', error.response?.data || error.message);
      alert('Failed to place COD order');
    }
  };

  if (!orderInfo) {
    return (
      <div className="p-8 min-h-screen flex items-center justify-center text-red-600 text-xl">
        Missing order information. Redirecting to home....
      </div>
    );
  }

  return (
    <div className="p-8 min-h-screen flex flex-col items-center justify-center bg-white text-black">
      <h2 className="text-3xl font-semibold mb-6">Choose Payment Method</h2>

      <div className="flex flex-col gap-6 w-full max-w-sm">
        <button
          onClick={handleRazorpayPayment}
          className="bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          disabled={loading}
        >
          {loading ? 'Processing...' : 'Pay with Razorpay'}
        </button>

        <button
          onClick={handleCOD}
          className="bg-gray-300 text-black py-3 rounded hover:bg-gray-400 transition"
          disabled={loading}
        >
          {loading ? 'Placing Order...' : 'Cash on Delivery (COD)'}
        </button>
      </div>
    </div>
  );
};

export default Payment;
