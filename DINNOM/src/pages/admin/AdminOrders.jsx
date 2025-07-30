import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token, user } = useAuth();

  const fetchAllOrders = useCallback(async () => {
    if (!token || !user?.isAdmin) {
      setError('You are not authorized to view this page.');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('/api/orders/all', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Failed to fetch orders');
      }

      const data = await response.json();
      setOrders(data);
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  }, [token, user]);

  const handleStatusChange = async (orderId, newStatus) => {
    try {
      const response = await fetch(`/api/orders/${orderId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Failed to update status');
      }

      // Update the order in the UI
      setOrders((prevOrders) =>
        prevOrders.map((order) => (order._id === orderId ? { ...order, status: newStatus } : order))
      );
      toast.success('Order status updated successfully!');
    } catch (err) {
      toast.error(`Error: ${err.message}`);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    if (!window.confirm('Are you sure you want to delete this order? This action cannot be undone.')) return;
    try {
      const response = await fetch(`/api/orders/${orderId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.message || 'Failed to delete order');
      }

      setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
      toast.success('Order deleted successfully!');
    } catch (err) {
      toast.error(`Error: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [fetchAllOrders]);

  if (loading) return <p className="text-center py-10">Loading all orders...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Admin - Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">Order ID</th>
              <th className="border px-3 py-2">User</th>
              <th className="border px-3 py-2">Items Count</th>
              <th className="border px-3 py-2">Shipping</th>
              <th className="border px-3 py-2">Amount</th>
              <th className="border px-3 py-2">Status</th>
              <th className="border px-3 py-2">Date</th>
              <th className="border px-3 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders &&
              orders.map((order) => (
                <tr key={order._id}>
                  <td className="border px-3 py-2">{order._id}</td>
                  <td className="border px-3 py-2">{order.userId?.displayName || 'N/A'}</td>
                  <td className="border px-3 py-2">{order.items.length}</td>
                  <td className="border px-3 py-2">
                     {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
                     {order.shippingAddress.postalCode}
                  </td>
                  <td className="border px-3 py-2">${order.totalAmount.toFixed(2)}</td>
                  <td className="border px-3 py-2">
                     <select
                       value={order.status}
                       className="border rounded px-2 py-1"
                       onChange={(e) => handleStatusChange(order._id, e.target.value)}
                     >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                     </select>
                  </td>
                  <td className="border px-3 py-2">
                    {new Date(order.orderDate).toLocaleString()}
                  </td>
                  <td className="border px-3 py-2 text-center">
                    <button onClick={() => handleDeleteOrder(order._id)}
                      className="text-red-600 hover:underline cursor-pointer"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrders;

