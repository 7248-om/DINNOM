import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [formData, setFormData] = useState({
    code: '',
    discountType: 'percentage',
    discountValue: '',
    minCartAmount: '',
    expiresAt: '',
  });
  const [editingCouponId, setEditingCouponId] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchCoupons = async () => {
    try {
      const res = await axios.get('http://localhost:5050/api/coupons');
      setCoupons(res.data);
    } catch (err) {
      console.error('Failed to fetch coupons', err);
    }
  };

  useEffect(() => {
    fetchCoupons();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      if (editingCouponId) {
        // Update existing
        await axios.put(`http://localhost:5050/api/coupons/${editingCouponId}`, formData);
        setSuccess('Coupon updated!');
      } else {
        // Create new
        await axios.post('http://localhost:5050/api/coupons/admin/create', formData);
        setSuccess('Coupon created!');
      }
      setFormData({
        code: '',
        discountType: 'percentage',
        discountValue: '',
        minCartAmount: '',
        expiresAt: '',
      });
      setEditingCouponId(null);
      fetchCoupons();
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this coupon?')) return;
    try {
      await axios.delete(`http://localhost:5050/api/coupons/${id}`);
      fetchCoupons();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleEdit = (coupon) => {
    setFormData({
      code: coupon.code,
      discountType: coupon.discountType,
      discountValue: coupon.discountValue,
      minCartAmount: coupon.minCartAmount,
      expiresAt: coupon.expiresAt?.split('T')[0],
    });
    setEditingCouponId(coupon._id);
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{editingCouponId ? 'Edit Coupon' : 'Add New Coupon'}</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-8">
        <input
          type="text"
          name="code"
          placeholder="Code"
          value={formData.code}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
       <select
  name="discountType"
  value={formData.discountType}
  onChange={handleChange}
  className="border px-3 py-2 rounded w-full"
>
  <option value="">Select Discount Type</option>
  <option value="flat">Flat (₹)</option>
  <option value="percent">Percentage (%)</option> {/* ✅ not "percentage" */}
</select>

        <input
          type="number"
          name="discountValue"
          placeholder="Discount Value"
          value={formData.discountValue}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="number"
          name="minCartAmount"
          placeholder="Min Cart Amount (optional)"
          value={formData.minCartAmount}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="date"
          name="expiresAt"
          value={formData.expiresAt}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="col-span-2 bg-black text-white py-2 rounded hover:bg-gray-800 transition"
        >
          {editingCouponId ? 'Update Coupon' : 'Create Coupon'}
        </button>
      </form>

      {error && <p className="text-red-600">{error}</p>}
      {success && <p className="text-green-600">{success}</p>}

      <h3 className="text-xl font-semibold mb-4">All Coupons</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2">Code</th>
              <th className="p-2">Type</th>
              <th className="p-2">Value</th>
              <th className="p-2">Min Cart</th>
              <th className="p-2">Expires</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((c) => {
              const expired = new Date(c.expiresAt) < new Date();
              return (
                <tr key={c._id} className={expired ? 'bg-red-50' : ''}>
                  <td className="p-2 font-mono">{c.code}</td>
                  <td className="p-2">{c.discountType}</td>
                  <td className="p-2">
                    {c.discountType === 'percent' ? `${c.discountValue}%` : `₹${c.discountValue}`}
                  </td>
                  <td className="p-2">₹{c.minCartAmount}</td>
                  <td className="p-2">{new Date(c.expiresAt).toLocaleDateString()}</td>
                  <td className="p-2 text-sm">
                    {expired ? (
                      <span className="text-red-500">Expired</span>
                    ) : (
                      <span className="text-green-600">Active</span>
                    )}
                  </td>
                  <td className="p-2">
                    <button
                      className="text-blue-600 hover:underline mr-2"
                      onClick={() => handleEdit(c)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => handleDelete(c._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
            {coupons.length === 0 && (
              <tr>
                <td colSpan="7" className="p-4 text-center text-gray-500">
                  No coupons available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminCoupons;
