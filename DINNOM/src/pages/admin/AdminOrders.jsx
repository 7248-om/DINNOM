import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API}/admin/orders`);
      console.log("Fetched orders:", res.data);
      setOrders(res.data);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    }
  };

  const updateStatus = async (orderId, newStatus) => {
    try {
      await axios.put(`${import.meta.env.VITE_API}/admin/orders/${orderId}/status`, {
        status: newStatus,
      });
      fetchOrders();
    } catch (error) {
      console.error("Status update failed", error);
    }
  };

  const deleteOrder = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;

    try {
      await axios.delete(`${import.meta.env.VITE_API}/admin/orders/${orderId}`);
      fetchOrders();
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Admin - Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">Order ID</th>
              <th className="border px-3 py-2">User ID</th>
              <th className="border px-3 py-2">Items Count</th>
              <th className="border px-3 py-2">Shipping</th>
              <th className="border px-3 py-2">Total</th>
              <th className="border px-3 py-2">Status</th>
              <th className="border px-3 py-2">Date</th>
              <th className="border px-3 py-2">Delete</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(orders) &&
              orders.map((order) => (
                <tr key={order._id} className="text-xs">
                  <td className="border px-3 py-2">{order._id.slice(0, 8)}...</td>
                  <td className="border px-3 py-2">
                    {typeof order.user === 'string'
                      ? order.user.slice(0, 8) + '...'
                      : order.user._id?.slice(0, 8) + '...'}
                  </td>
                  <td className="border px-3 py-2">{order.orderItems.length}</td>
                  <td className="border px-3 py-2">
                    {order.shippingAddress.address}, {order.shippingAddress.city},{' '}
                    {order.shippingAddress.postalCode}
                  </td>
                  <td className="border px-3 py-2">₹{order.totalAmount}</td>
                  <td className="border px-3 py-2">
                    <select
                      value={order.status}
                      className="border rounded px-2 py-1"
                      onChange={(e) => updateStatus(order._id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="border px-3 py-2">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                  <td className="border px-3 py-2 text-red-600 hover:underline cursor-pointer">
                    <button onClick={() => deleteOrder(order._id)}>Delete</button>
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
