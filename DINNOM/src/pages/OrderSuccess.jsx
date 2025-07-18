import React from 'react';
import { useParams, Link } from 'react-router-dom';

const OrderSuccess = () => {
  const { orderId } = useParams();

  return (
    <div className="text-center mt-20">
      <h2 className="text-3xl font-bold mb-4">🎉 Order Placed Successfully!</h2>
      <p>Your order ID is <strong>{orderId}</strong>.</p>
      <Link to="/" className="text-blue-500 underline mt-4 block">Go back to homepage</Link>
    </div>
  );
};

export default OrderSuccess;
