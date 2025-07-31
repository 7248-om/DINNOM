import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BadgePercent, Trash2, PencilLine, Plus } from 'lucide-react';

const AdminCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [formData, setFormData] = useState({
    code: '',
    discountType: 'percent',
    discountValue: '',
    minCartAmount: '',
    expiresAt: '',
  });
  const [editingCouponId, setEditingCouponId] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const fetchCoupons = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:5050/api/coupons');
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
        await axios.put(`http://127.0.0.1:5050/api/coupons/${editingCouponId}`, formData);
        setSuccess('Coupon updated!');
      } else {
        await axios.post('http://127.0.0.1:5050/api/coupons/admin/create', formData);
        setSuccess('Coupon created!');
      }
      setFormData({
        code: '',
        discountType: 'percent',
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
      await axios.delete(`http://127.0.0.1:5050/api/coupons/${id}`);
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

  const renderInput = (name, label, type = 'text') => (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={label}
        required
        className="peer h-12 w-full border-b-2 border-gray-300 bg-transparent text-gray-800 placeholder-transparent focus:outline-none focus:border-indigo-600"
      />
      <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-gray-600">
        {label}
      </label>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold flex items-center gap-2 text-gray-800">
          <BadgePercent className="w-6 h-6 text-indigo-600" />
          {editingCouponId ? 'Edit Coupon' : 'Create New Coupon'}
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
      >
        {renderInput('code', 'Coupon Code')}

        <div className="relative w-full">
          <select
            name="discountType"
            value={formData.discountType}
            onChange={handleChange}
            className="w-full border-b-2 border-gray-300 text-gray-800 bg-transparent focus:outline-none focus:border-indigo-600 h-12"
          >
            <option value="">Select Discount Type</option>
            <option value="flat">Flat (₹)</option>
            <option value="percent">Percentage (%)</option>
          </select>
        </div>

        {renderInput('discountValue', 'Discount Value', 'number')}
        {renderInput('minCartAmount', 'Min Cart Amount', 'number')}
        {renderInput('expiresAt', 'Expiry Date', 'date')}

        <button
          type="submit"
          className="col-span-full bg-indigo-600 text-white py-3 rounded-full hover:bg-indigo-700 transition flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          {editingCouponId ? 'Update Coupon' : 'Create Coupon'}
        </button>
      </form>

      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-600 mb-4">{success}</p>}

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">All Coupons</h3>
      <div className="overflow-x-auto rounded-xl shadow bg-white">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Code</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Value</th>
              <th className="px-4 py-3">Min Cart</th>
              <th className="px-4 py-3">Expires</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((c) => {
              const expired = new Date(c.expiresAt) < new Date();
              return (
                <tr key={c._id} className={expired ? 'bg-red-50' : 'hover:bg-gray-50'}>
                  <td className="px-4 py-3 font-mono font-semibold">{c.code}</td>
                  <td className="px-4 py-3 capitalize">{c.discountType}</td>
                  <td className="px-4 py-3">
                    {c.discountType === 'percent' ? `${c.discountValue}%` : `₹${c.discountValue}`}
                  </td>
                  <td className="px-4 py-3">₹{c.minCartAmount}</td>
                  <td className="px-4 py-3">{new Date(c.expiresAt).toLocaleDateString()}</td>
                  <td className="px-4 py-3">
                    {expired ? (
                      <span className="text-red-600 font-semibold">Expired</span>
                    ) : (
                      <span className="text-green-600 font-semibold">Active</span>
                    )}
                  </td>
                  <td className="px-4 py-3 flex gap-3">
                    <button onClick={() => handleEdit(c)} className="text-blue-600 hover:text-blue-800">
                      <PencilLine className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(c._id)} className="text-red-600 hover:text-red-800">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
            {coupons.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-6">
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