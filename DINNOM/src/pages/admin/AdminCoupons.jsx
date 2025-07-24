import React, { useState } from 'react';
import axios from 'axios';

const AdminCoupons = () => {
  const [coupon, setCoupon] = useState({
    code: '',
    discountType: 'flat',
    discountValue: '',
    minCartAmount: '',
    expiresAt: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');

  const handleChange = (e) => {
    setCoupon({ ...coupon, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      await axios.post('http://localhost:5050/api/coupons/admin/create', coupon, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('✅ Coupon created successfully!');
      setCoupon({
        code: '',
        discountType: 'flat',
        discountValue: '',
        minCartAmount: '',
        expiresAt: '',
      });
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to create coupon');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create New Coupon</h2>

      {message && <p className="text-green-600 mb-3">{message}</p>}
      {error && <p className="text-red-600 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Coupon Code</label>
          <input
            type="text"
            name="code"
            value={coupon.code}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Discount Type</label>
          <select
            name="discountType"
            value={coupon.discountType}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
          >
            <option value="flat">Flat (₹)</option>
            <option value="percent">Percentage (%)</option>
          </select>
        </div>

        <div>
          <label className="block font-medium">Discount Value</label>
          <input
            type="number"
            name="discountValue"
            value={coupon.discountValue}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Minimum Cart Amount</label>
          <input
            type="number"
            name="minCartAmount"
            value={coupon.minCartAmount}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Expiry Date</label>
          <input
            type="datetime-local"
            name="expiresAt"
            value={coupon.expiresAt}
            onChange={handleChange}
            className="border px-3 py-2 rounded w-full"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-full mt-4"
        >
          Create Coupon
        </button>
      </form>
    </div>
  );
};

export default AdminCoupons;
