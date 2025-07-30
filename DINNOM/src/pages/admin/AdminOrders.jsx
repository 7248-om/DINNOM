import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';
import { FiTrash2, FiSearch } from 'react-icons/fi';

const statusColors = {
  Processing: '#FFF176',
  Shipped: '#FFB74D',
  Delivered: '#81C784',
  Cancelled: '#E57373',
};

const ORDERS_PER_PAGE = 15;

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token, user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [sortField, setSortField] = useState('orderDate');
  const [sortAsc, setSortAsc] = useState(false); // false = descending
  const [currentPage, setCurrentPage] = useState(1);

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

  useEffect(() => {
    fetchAllOrders();
  }, [fetchAllOrders]);

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
      setOrders((prev) =>
        prev.map((order) => (order._id === orderId ? { ...order, status: newStatus } : order))
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
      setOrders((prev) => prev.filter((order) => order._id !== orderId));
      setSelectedOrders((prev) => prev.filter((id) => id !== orderId));
      toast.success('Order deleted successfully!');
    } catch (err) {
      toast.error(`Error: ${err.message}`);
    }
  };

  const handleBulkDelete = async () => {
    if (selectedOrders.length === 0) {
      toast('No orders selected');
      return;
    }
    if (!window.confirm(`Delete ${selectedOrders.length} selected order(s)? This action cannot be undone.`)) return;

    try {
      for (const orderId of selectedOrders) {
        const response = await fetch(`/api/orders/${orderId}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || `Failed to delete order ${orderId}`);
        }
      }
      setOrders((prev) => prev.filter((order) => !selectedOrders.includes(order._id)));
      setSelectedOrders([]);
      toast.success('Selected orders deleted successfully!');
    } catch (err) {
      toast.error(`Bulk delete error: ${err.message}`);
    }
  };

  // Toggle select all visible orders on current page
  const toggleSelectAll = (checked, visibleOrders) => {
    if (checked) {
      const visibleIds = visibleOrders.map((o) => o._id);
      setSelectedOrders((prev) => Array.from(new Set([...prev, ...visibleIds])));
    } else {
      const visibleIds = visibleOrders.map((o) => o._id);
      setSelectedOrders((prev) => prev.filter((id) => !visibleIds.includes(id)));
    }
  };

  // Toggle sorting on the specified field
  const toggleSort = (field) => {
    if (sortField === field) setSortAsc((asc) => !asc);
    else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  // Filter and sort orders
  const filteredOrders = orders.filter(({ _id, userId }) =>
    _id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (userId?.displayName || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  filteredOrders.sort((a, b) => {
    let aVal, bVal;
    switch (sortField) {
      case '_id':
        aVal = a._id.toLowerCase();
        bVal = b._id.toLowerCase();
        break;
      case 'user':
        aVal = (a.userId?.displayName || '').toLowerCase();
        bVal = (b.userId?.displayName || '').toLowerCase();
        break;
      case 'totalAmount':
        aVal = a.totalAmount;
        bVal = b.totalAmount;
        break;
      case 'orderDate':
        aVal = new Date(a.orderDate);
        bVal = new Date(b.orderDate);
        break;
      default:
        aVal = a[sortField];
        bVal = b[sortField];
    }

    if (aVal > bVal) return sortAsc ? 1 : -1;
    if (aVal < bVal) return sortAsc ? -1 : 1;
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / ORDERS_PER_PAGE);
  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * ORDERS_PER_PAGE,
    currentPage * ORDERS_PER_PAGE
  );

  if (loading)
    return (
      <div className="flex justify-center items-center py-20">
        <svg
          className="animate-spin h-10 w-10 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
          <path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
        <span className="ml-3 text-black text-lg font-semibold">Loading all orders...</span>
      </div>
    );

  if (error)
    return (
      <p
        className="text-center py-10 text-red-700 font-semibold bg-red-100 rounded max-w-lg mx-auto"
        role="alert"
      >
        {error}
      </p>
    );

  return (
    <div className="p-8 max-w-full font-sans text-black">
      <h2 className="text-3xl font-bold mb-8 tracking-wide">Admin - Orders</h2>

      {/* Search + Bulk Delete Button */}
      <div className="mb-8 max-w-md relative text-gray-500 focus-within:text-black flex flex-col sm:flex-row gap-3 items-center">
        <div className="flex-grow relative w-full text-gray-500 focus-within:text-black">
          <FiSearch className="pointer-events-none absolute left-3 top-1/2 transform -translate-y-1/2" size={20} />
          <input
            type="text"
            placeholder="Search orders by ID or user..."
            className="block w-full pl-10 pr-4 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset page on search
            }}
          />
        </div>

        {selectedOrders.length > 0 && (
          <button
            onClick={handleBulkDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            title={`Delete ${selectedOrders.length} selected orders`}
          >
            Delete Selected ({selectedOrders.length})
          </button>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-fixed border-collapse border border-black rounded-lg shadow-sm overflow-hidden">
          <thead className="bg-black text-white sticky top-0 z-10">
            <tr>
              {/* Select All Checkbox */}
              <th className="border border-white px-4 py-3 text-left whitespace-nowrap">
                <input
                  type="checkbox"
                  checked={paginatedOrders.length > 0 && paginatedOrders.every((order) => selectedOrders.includes(order._id))}
                  onChange={(e) => toggleSelectAll(e.target.checked, paginatedOrders)}
                />
              </th>

              {[
                { label: 'Order ID', field: '_id', rounded: 'rounded-tl-lg' },
                { label: 'User', field: 'user', sortable: true },
                { label: 'Items' },
                { label: 'Shipping Address' },
                { label: 'Amount', field: 'totalAmount', sortable: true },
                { label: 'Status' },
                { label: 'Date', field: 'orderDate', sortable: true },
                { label: 'Delete', rounded: 'rounded-tr-lg' },
              ].map(({ label, rounded, field, sortable }) => (
                <th
                  key={label}
                  className={`border border-white px-4 py-3 text-left text-sm font-semibold whitespace-nowrap ${
                    rounded || ''
                  } ${sortable ? 'cursor-pointer select-none' : ''}`}
                  onClick={() => sortable && toggleSort(field)}
                  title={sortable ? `Sort by ${label}` : undefined}
                >
                  {label}
                  {/* Show sort arrow */}
                  {sortable && sortField === field && (
                    <span className="inline-block ml-1">{sortAsc ? '▲' : '▼'}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedOrders.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-12 text-gray-700 font-medium">
                  No orders found matching your criteria.
                </td>
              </tr>
            ) : (
              paginatedOrders.map((order, idx) => {
                const bgColor = statusColors[order.status] || 'white';
                const textColor = order.status === 'Cancelled' ? '#FFF' : '#000';

                return (
                  <tr
                    key={order._id}
                    className={`group ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-100'} hover:bg-black transition-colors cursor-default`}
                    style={{ transition: 'background-color 0.3s ease' }}
                  >
                    <td className="border border-black px-4 py-2 text-center whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedOrders.includes(order._id)}
                        onChange={() =>
                          setSelectedOrders((prev) =>
                            prev.includes(order._id)
                              ? prev.filter((id) => id !== order._id)
                              : [...prev, order._id]
                          )
                        }
                        aria-label={`Select order ${order._id}`}
                      />
                    </td>

                    <td
                      className="border border-black px-4 py-2 max-w-xs whitespace-nowrap group-hover:text-white"
                      style={{ minWidth: '140px' }}
                      title={order._id}
                    >
                      {order._id.slice(0, 8)}...
                    </td>

                    <td
                      className="border border-black px-4 py-2 max-w-xs whitespace-nowrap group-hover:text-white"
                      style={{ minWidth: '140px' }}
                      title={order.userId?.displayName || 'N/A'}
                    >
                      {order.userId?.displayName || 'N/A'}
                    </td>

                    <td
                      className="border border-black px-4 py-2 text-center font-mono whitespace-nowrap group-hover:text-white"
                      style={{ minWidth: '50px' }}
                    >
                      {order.items.length}
                    </td>

                    <td
                      className="border border-black px-4 py-2 max-w-md group-hover:text-white"
                      style={{ minWidth: '250px', whiteSpace: 'normal', wordBreak: 'break-word' }}
                      title={`${order.shippingAddress.address}, ${order.shippingAddress.city}, ${order.shippingAddress.postalCode}`}
                    >
                      {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}
                    </td>

                    <td
                      className="border border-black px-4 py-2 font-semibold whitespace-nowrap group-hover:text-white"
                      style={{ minWidth: '90px' }}
                    >
                      ${order.totalAmount.toFixed(2)}
                    </td>

                    <td
                      className="border border-black px-4 py-2 whitespace-nowrap group-hover:text-white"
                      style={{ minWidth: '130px' }}
                    >
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order._id, e.target.value)}
                        className="w-full border border-black rounded-md px-4 py-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-black font-medium"
                        style={{ backgroundColor: bgColor, color: textColor, minWidth: '120px' }}
                      >
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>

                    <td
                      className="border border-black px-4 py-2 whitespace-nowrap font-mono text-gray-800 group-hover:text-white"
                      title={new Date(order.orderDate).toLocaleString()}
                      style={{ minWidth: '160px' }}
                    >
                      {new Date(order.orderDate).toLocaleDateString()}
                      <br />
                      <small className="text-xs group-hover:text-white">
                        {new Date(order.orderDate).toLocaleTimeString()}
                      </small>
                    </td>

                    <td
                      className="border border-black px-4 py-2 text-center whitespace-nowrap rounded-br-lg group-hover:text-white"
                      style={{ minWidth: '70px' }}
                    >
                      <button
                        onClick={() => handleDeleteOrder(order._id)}
                        className="text-black hover:text-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
                        title="Delete order"
                      >
                        <FiTrash2 size={20} />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2 flex-wrap">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded ${
              currentPage === 1
                ? 'border border-gray-300 text-gray-400 cursor-not-allowed'
                : 'border border-black hover:bg-black hover:text-white transition'
            }`}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === idx + 1 ? 'bg-black text-white' : 'border border-black hover:bg-black hover:text-white transition'
              }`}
              aria-current={currentPage === idx + 1 ? 'page' : undefined}
              aria-label={`Go to page ${idx + 1}`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${
              currentPage === totalPages
                ? 'border border-gray-300 text-gray-400 cursor-not-allowed'
                : 'border border-black hover:bg-black hover:text-white transition'
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminOrders;
