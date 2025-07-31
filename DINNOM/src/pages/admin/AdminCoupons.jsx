import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
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
  const [loading, setLoading] = useState(false);

  const fetchCoupons = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:5050/api/coupons');
      setCoupons(res.data);
    } catch {
      toast.error('Failed to fetch coupons');
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
    setLoading(true);
    try {
      if (editingCouponId) {
        await axios.put(`http://127.0.0.1:5050/api/coupons/${editingCouponId}`, formData);
        toast.success('Coupon updated!');
      } else {
        await axios.post('http://127.0.0.1:5050/api/coupons/admin/create', formData);
        toast.success('Coupon created!');
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
      toast.error(err.response?.data?.error || 'Something went wrong');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this coupon?')) return;
    try {
      await axios.delete(`http://127.0.0.1:5050/api/coupons/${id}`);
      fetchCoupons();
      toast.success('Coupon deleted!');
    } catch {
      toast.error('Delete failed');
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

  const renderInput = (name, label, type = 'text', hint = '') => (
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
      {hint && <span className="text-xs text-gray-500 mt-1 block">{hint}</span>}
    </div>
  );

  const calculateDaysLeft = (expiry) => {
    const days = Math.ceil((new Date(expiry) - new Date()) / (1000 * 60 * 60 * 24));
    return days;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6 max-w-7xl mx-auto">
      <Toaster position="top-right" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2 text-gray-800">
          <BadgePercent className="w-6 h-6 text-indigo-600" />
          {editingCouponId ? 'Edit Coupon' : 'Create New Coupon'}
        </h2>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 md:p-6 rounded-2xl shadow grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10"
      >
        {renderInput('code', 'Coupon Code', 'text', 'Min 3 characters, unique')}
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
          <span className="text-xs text-gray-500 mt-1 block">Choose how the discount applies</span>
        </div>
        {renderInput('discountValue', 'Discount Value', 'number', 'Amount or % off')}
        {renderInput('minCartAmount', 'Min Cart Amount', 'number', '₹ cart total to activate')}
        {renderInput('expiresAt', 'Expiry Date', 'date', 'Choose expiration date')}

        <button
          type="submit"
          className="col-span-full bg-indigo-600 text-white py-3 rounded-full hover:bg-indigo-700 transition flex items-center justify-center gap-2"
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
              </svg>
              Submitting...
            </div>
          ) : (
            <>
              <Plus className="w-5 h-5" />
              {editingCouponId ? 'Update Coupon' : 'Create Coupon'}
            </>
          )}
        </button>
      </form>

      <hr className="my-10 border-gray-200" />

      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">All Coupons</h3>
      <div className="w-full overflow-x-auto rounded-xl shadow bg-white">
        <table className="min-w-[640px] w-full text-xs md:text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
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
                      <span className="text-green-600 font-semibold">
                        Expires in {calculateDaysLeft(c.expiresAt)} days
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 flex gap-3">
                    <div className="relative group">
                      <button onClick={() => handleEdit(c)} className="text-blue-600 hover:text-blue-800">
                        <PencilLine className="w-4 h-4" />
                      </button>
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 rounded text-xs text-white bg-gray-800 opacity-0 group-hover:opacity-100 pointer-events-none transition whitespace-nowrap">
                        Edit Coupon
                      </span>
                    </div>

                    <div className="relative group">
                      <button onClick={() => handleDelete(c._id)} className="text-red-600 hover:text-red-800">
                        <Trash2 className="w-4 h-4" />
                      </button>
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 rounded text-xs text-white bg-gray-800 opacity-0 group-hover:opacity-100 pointer-events-none transition whitespace-nowrap">
                        Delete Coupon
                      </span>
                    </div>

                  </td>
                </tr>
              );
            })}
            {coupons.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-10">
                  <div className="flex flex-col items-center gap-2">
                    <BadgePercent className="w-8 h-8 text-indigo-500" />
                    <p className="font-medium">No coupons available</p>
                    <button
                      onClick={() => setEditingCouponId(null)}
                      className="text-indigo-600 hover:underline"
                    >
                      Create your first one →
                    </button>
                  </div>
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
