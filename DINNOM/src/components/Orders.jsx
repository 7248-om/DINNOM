import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { auth } = useAuth();

  useEffect(() => {
    const fetchOrders = async () => {
      if (!auth.token) {
        setLoading(false);
        setError('You must be logged in to view your orders.');
        return;
      }

      try {
        const response = await fetch('/api/orders/myorders', {
          headers: {
            'Authorization': `Bearer ${auth.token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch orders');
        }

        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [auth.token]);

  const OrderCard = ({ order }) => (
    <div className="border border-gray-300 rounded-lg mb-6 bg-white shadow-sm">
      <div className="bg-gray-100 p-4 flex justify-between items-center rounded-t-lg text-sm text-gray-600">
        <div className="flex space-x-8">
          <div>
            <p className="uppercase font-semibold">Order Placed</p>
            <p>{new Date(order.orderDate).toLocaleDateString()}</p>
          </div>
          <div>
            <p className="uppercase font-semibold">Total</p>
            <p>${order.totalAmount.toFixed(2)}</p>
          </div>
        </div>
        <div>
          <p className="uppercase font-semibold">Order # {order._id}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold mb-4 text-black">Status: {order.status}</h3>
        {order.items.map((item, index) => (
          <div key={index} className="flex mb-6 last:mb-0">
            <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
            <div className="flex-grow">
              <p className="font-semibold text-black">{item.name}</p>
              <p className="text-sm text-gray-500">Size: {item.selectedSize}</p>
              <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              <p className="font-bold text-black">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex flex-col space-y-2">
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition-colors w-full text-left">
                Track package
              </button>
              <button className="bg-white border border-gray-300 text-black px-4 py-2 rounded-lg text-sm hover:bg-gray-100 w-full text-left">
                Write a product review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    if (loading) {
      return <p className="text-center py-10">Loading your orders...</p>;
    }
    if (error) {
      return <p className="text-center py-10 text-red-500">Error: {error}</p>;
    }
    if (orders.length === 0) {
      return (
        <div className="text-center py-10 border-2 border-dashed border-gray-300 rounded-lg">
          <h2 className="text-xl font-semibold">You have no orders yet.</h2>
          <p className="text-gray-600 mt-2">When you place an order, it will appear here.</p>
          <Link to="/" className="mt-4 inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors">
            Continue Shopping
          </Link>
        </div>
      );
    }
    return orders.map(order => <OrderCard key={order._id} order={order} />);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-black">Your Orders</h1>
      </div>

      <nav className="border-b border-gray-300 mb-6">
        <ul className="flex space-x-8">
          <li><a href="#" className="py-3 border-b-2 border-black font-semibold text-black">Orders</a></li>
          <li><a href="#" className="py-3 text-gray-600 hover:border-b-2 hover:border-gray-400 transition-colors">Buy Again</a></li>
          <li><a href="#" className="py-3 text-gray-600 hover:border-b-2 hover:border-gray-400 transition-colors">Not Yet Shipped</a></li>
          <li><a href="#" className="py-3 text-gray-600 hover:border-b-2 hover:border-gray-400 transition-colors">Cancelled Orders</a></li>
        </ul>
      </nav>

      {renderContent()}
    </div>
  );
};

export default Orders;
