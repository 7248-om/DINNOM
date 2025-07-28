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
        console.error('❌ Failed to load Razorpay script');
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

    console.log('💳 Razorpay button clicked');
    setLoading(true);

    const scriptLoaded = await loadRazorpayScript();
    if (!scriptLoaded) {
      alert('Razorpay SDK failed to load');
      setLoading(false);
      return;
    }

    try {
      const amount = parseInt(orderInfo.totalAmount);
      console.log('📦 Sending amount to backend (in rupees):', amount);

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
          try {
            const verifyRes = await axios.post(
              '/api/payment/verify',
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                ...orderInfo,
                userId: user._id,
              },
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );

            if (verifyRes.data.success) {
              console.log('✅ Payment verified');
              navigate('/success'); // ✅ Navigate on successful payment
            } else {
              alert('❌ Payment verification failed');
            }
          } catch (err) {
            console.error('❌ Verification error:', err);
            alert('Payment verification error');
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
      console.error('❌ Error creating Razorpay order:', err);
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
      navigate('/success'); // ✅ Navigate on successful COD
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
          {loading ? 'Placing Order...' : 'Cash on Delivery (COD)' }
        </button>
      </div>
    </div>
  );
};

export default Payment;
