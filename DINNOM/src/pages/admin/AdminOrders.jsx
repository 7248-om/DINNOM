import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BACKEND = import.meta.env.VITE_BACKEND_URL;

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${BACKEND}/api/orders/admin`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setOrders(res.data);
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch orders', err);
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    try {
      await axios.put(
        `${BACKEND}/api/orders/${orderId}/status`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      setOrders((prev) =>
        prev.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (err) {
      console.error('Error updating status', err);
      alert('Failed to update order status');
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const filteredOrders = orders
    .filter((order) => {
      if (statusFilter && order.status !== statusFilter) return false;
      const q = searchQuery.toLowerCase();
      return (
        order._id.toLowerCase().includes(q) ||
        order.user?.email?.toLowerCase().includes(q)
      );
    });

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Admin Orders</h1>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by email or Order ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 rounded bg-gray-800 text-white border border-gray-600 w-full md:w-1/2"
        />

        <div>
          <label className="mr-2 text-white font-semibold">Filter by Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 rounded bg-gray-800 text-white border border-gray-600"
          >
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </div>

      {loading ? (
        <p>Loading orders...</p>
      ) : filteredOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-700">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="p-3 border border-gray-700">Order ID</th>
                <th className="p-3 border border-gray-700">User Email</th>
                <th className="p-3 border border-gray-700">Total Amount</th>
                <th className="p-3 border border-gray-700">Status</th>
                <th className="p-3 border border-gray-700">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order._id} className="bg-gray-900 hover:bg-gray-800">
                  <td className="p-3 border border-gray-700">{order._id}</td>
                  <td className="p-3 border border-gray-700">{order.user?.email || 'N/A'}</td>
                  <td className="p-3 border border-gray-700">₹{order.totalAmount}</td>
                  <td className="p-3 border border-gray-700">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        updateOrderStatus(order._id, e.target.value)
                      }
                      className="bg-gray-900 text-white p-1 rounded"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                    </select>
                  </td>
                  <td className="p-3 border border-gray-700">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
