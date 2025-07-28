import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      <CheckCircle className="text-green-500 w-20 h-20 mb-6 animate-bounce" />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
      <p className="text-gray-600 text-lg max-w-md mb-8">
        Thank you for shopping with <span className="font-semibold text-black">NOIRÉ</span>. Your order has been placed and is being processed. We’ll notify you once it’s on the way.
      </p>

      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-900 transition"
        >
          Go to Homepage
        </Link>
        <Link
          to="/profile/orders"
          className="border border-black text-black px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          View Orders
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
