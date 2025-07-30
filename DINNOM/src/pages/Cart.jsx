import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BadgePercent } from "lucide-react";
const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [error, setError] = useState('');
  const [updating, setUpdating] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponData, setCouponData] = useState(null);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [availableCoupons, setAvailableCoupons] = useState([]);
  const token = localStorage.getItem('token');

  const fetchCart = async () => {
    try {
      const res = await axios.get('http://localhost:5050/api/cart', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch cart');
    }
  };

  const fetchAvailableCoupons = async () => {
    try {
      const res = await axios.get('http://localhost:5050/api/coupons/active');
      setAvailableCoupons(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const updateQuantity = async (productId, selectedSize, newQty) => {
    if (newQty <= 0) return;
    try {
      setUpdating(true);
      await axios.post(
        'http://localhost:5050/api/cart',
        { productId, selectedSize, quantity: newQty, absolute: true },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      await fetchCart();
    } catch (err) {
      console.error(err);
      setError('Error updating quantity');
    } finally {
      setUpdating(false);
    }
  };

  const handleApplyCoupon = async (codeToApply) => {
    const code = codeToApply || couponCode;
    try {
      const response = await axios.post('http://localhost:5050/api/coupons/validate', {
        code,
        cartTotal: total,
      });
      const coupon = response.data.coupon;

      let discount = 0;
      if (coupon.discountType === 'flat') {
        discount = coupon.discountValue;
      } else if (coupon.discountType === 'percent') {
        discount = (coupon.discountValue / 100) * total;
      }

      setCouponData(coupon);
      setDiscountAmount(Math.floor(discount));
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Invalid or inapplicable coupon');
      setCouponData(null);
      setDiscountAmount(0);
    }
  };

  const handleIncrement = (productId, selectedSize, currentQty) => {
    updateQuantity(productId, selectedSize, currentQty + 1);
  };

  const handleDecrement = (productId, selectedSize, currentQty) => {
    if (currentQty > 1) {
      updateQuantity(productId, selectedSize, currentQty - 1);
    }
  };

  const removeItem = async (productId, selectedSize) => {
    try {
      setUpdating(true);
      await axios.delete('http://localhost:5050/api/cart/remove', {
        headers: { Authorization: `Bearer ${token}` },
        data: { productId, selectedSize },
      });
      await fetchCart();
    } catch (err) {
      console.error(err);
      setError('Failed to remove item');
    } finally {
      setUpdating(false);
    }
  };

  useEffect(() => {
    fetchCart();
    fetchAvailableCoupons();
  }, []);

  if (!cart) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] gap-4 text-center">
      <svg className="animate-spin h-10 w-10 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
      </svg>
      <p className="text-lg text-gray-500">Fetching your cart...</p>
    </div>
  );
}

if (cart.items.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh] text-center gap-6">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="Empty Cart"
        className="w-32 h-32 opacity-80"
      />
      <div>
        <h2 className="text-2xl font-semibold text-gray-700">Your cart is empty</h2>
        <p className="text-gray-500 mt-1">Looks like you haven't added anything yet.</p>
      </div>
      <button
        onClick={() => navigate('/')}
        className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
      >
        Shop Now
      </button>
    </div>
  );
}

  const total = cart.items.reduce(
    (acc, item) => acc + item.productId.price * item.quantity,
    0
  );
  const finalTotal = total - discountAmount;

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      <h1 className="text-3xl font-bold">Your Cart</h1>

      {error && <p className="text-red-500">{error}</p>}

      {cart.items.map((item) => (
        <div
          key={item.productId._id + item.selectedSize}
          className="flex items-center justify-between border-b py-4"
        >
          <div className="flex gap-4 items-center">
            <img
              src={item.productId.mainImage}
              alt={item.productId.name}
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <p className="font-medium">{item.productId.name}</p>
              <p>Size: {item.selectedSize}</p>
              <p>Price: ₹{item.productId.price}</p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <button
              disabled={updating}
              onClick={() => handleDecrement(item.productId._id, item.selectedSize, item.quantity)}
              className="px-3 py-1 border rounded"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              disabled={updating}
              onClick={() => handleIncrement(item.productId._id, item.selectedSize, item.quantity)}
              className="px-3 py-1 border rounded"
            >
              +
            </button>
            <button
              disabled={updating}
              onClick={() => removeItem(item.productId._id, item.selectedSize)}
              className="text-red-600 underline ml-4"
            >
              Remove
            </button>
          </div>
        </div>
      ))}


{/* Coupon Manual Input */}
<div className="mt-8 space-y-4">
  <div className="flex flex-wrap items-center gap-3">
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter Coupon Code"
        className="w-full px-4 py-2 pr-12 rounded-lg border border-gray-300 backdrop-blur-md bg-white/70 shadow-inner outline-none focus:ring-2 focus:ring-black transition"
      />
      <BadgePercent className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
    </div>

    <button
      onClick={() => handleApplyCoupon(null)}
      className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition shadow"
    >
      Apply
    </button>
  </div>

  {/* Available Coupons Dropdown */}
  {availableCoupons.length > 0 && (
    <div>
      <p className="font-medium mb-2 text-gray-700">Available Coupons:</p>
      <div className="flex flex-wrap gap-2">
        {availableCoupons.map((coupon) => (
          <button
            key={coupon._id}
            onClick={() => handleApplyCoupon(coupon.code)}
            className="px-3 py-1 rounded-full border border-gray-300 text-sm hover:bg-black hover:text-white transition-all duration-200"
          >
            {coupon.code} ({coupon.discountType === 'flat'
              ? `₹${coupon.discountValue}`
              : `${coupon.discountValue}%`})
          </button>
        ))}
      </div>
    </div>
  )}

  {/* Applied Coupon Confirmation */}
  {couponData && (
    <div className="text-green-600 text-sm font-medium mt-2">
      🎉 Coupon <b>{couponData.code}</b> applied! You saved ₹{discountAmount}.
    </div>
  )}

  {/* Total Calculation Section */}
  <div className="text-right text-lg font-semibold space-y-1 pt-4 border-t border-gray-200 mt-6">
    <p className="text-gray-600">Subtotal: ₹{total}</p>
    {discountAmount > 0 && (
      <p className="text-green-600">Discount: -₹{discountAmount}</p>
    )}
    <h3 className="text-black text-xl font-bold">Total: ₹{finalTotal}</h3>
  </div>
</div>


      <div className="text-right">
       <button
  className="bg-black text-white px-6 py-2 rounded-full mt-4"
  onClick={() => {
    navigate('/checkout', {
  state: {
    cartItems: cart.items,
    totalAmount: finalTotal > 0 ? finalTotal : 1, // ✅ Ensure minimum ₹1
    coupon: couponData,
    discountAmount,
  },
});

  }}
>
  Proceed to Checkout
</button>

      </div>
    </div>
  );
};

export default Cart;
