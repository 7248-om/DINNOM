import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Silk from '../components/Silk';
import emptyCart from '../assets/navbar/empty cart.png';
import { useAuth } from '../context/AuthContext.jsx';

const Wishlist = () => {
  const { user, token } = useAuth(); // Get user and token from context
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch wishlist from backend
  useEffect(() => {
    // Only fetch if the user is logged in and we have a token
    if (!user || !token) {
      setLoading(false);
      return;
    }
    async function fetchWishlist() {
      try {
        const res = await fetch(`http://localhost:5050/api/wishlist`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await res.json();
        setWishlistItems(data.wishlist || []);
      } catch (err) {
        setWishlistItems([]);
      }
      setLoading(false);
    }
    fetchWishlist();
  }, [user, token]);

  // Remove item from wishlist (frontend + backend)
  const handleRemove = async (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
    // Optionally, call backend to remove from DB as well
    await fetch('http://localhost:5050/api/wishlist/remove', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userEmail, productId: id }),
    });
  };

  const handleQuantity = (id, delta) => {
    setWishlistItems(wishlistItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
    // Optionally, update quantity in backend as well
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* 🔮 Silk 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#7B7481"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Wishlist Content */}
      <div className="max-w-4xl mx-auto pt-32 pb-12 px-4 flex-1 w-full">
        <div className="flex justify-center mb-10">
          <span
            className="text-4xl md:text-5xl font-extrabold tracking-widest uppercase bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent drop-shadow-lg"
            style={{
              letterSpacing: '0.2em',
              textShadow: '2px 2px 8px #222, 0 2px 16px #fff2'
            }}
          >
            My Cart
          </span>
        </div>

        {loading ? (
          <div className="text-center text-lg text-gray-200">Loading...</div>
        ) : wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20">
            <img src={emptyCart} alt="Empty Cart" className="w-52 h-52 object-contain mb-6 opacity-90" />
            <div className="text-center text-gray-100 text-2xl font-extrabold mb-2 drop-shadow-lg">
              Please add something
            </div>
            <div className="text-center text-gray-200 italic text-lg font-extrabold drop-shadow-lg mb-6">
              even the carts have emotions ...
            </div>
            <Link
              to="/"
              className="mt-4 px-8 py-3 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-200 transition shadow"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {wishlistItems.map(item => (
                <div key={item.id} className="flex items-center bg-[#181818] rounded-lg shadow p-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md border border-gray-800" />
                  <div className="flex-1 ml-6">
                    <div className="text-xl font-bold">{item.name}</div>
                    <div className="text-lg text-gray-300 mt-2">{item.price}</div>
                  </div>

                  {/* Quantity Counter */}
                  <div className="flex items-center mr-4">
                    <button
                      onClick={() => handleQuantity(item.id, -1)}
                      className="bg-gray-700 text-white px-3 py-1 rounded-l-full text-xl font-bold hover:bg-gray-600"
                      disabled={item.quantity === 1}
                    >-</button>
                    <span className="bg-gray-900 px-4 py-1 text-lg font-bold">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantity(item.id, 1)}
                      className="bg-gray-700 text-white px-3 py-1 rounded-r-full text-xl font-bold hover:bg-gray-600"
                    >+</button>
                  </div>

                  {/* Remove Button */}
                  <button
                    className="text-gray-400 hover:text-red-500 text-2xl font-bold px-2"
                    onClick={() => handleRemove(item.id)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Buttons */}
            <div className="flex justify-between items-center mt-10">
              <Link
                to="/"
                className="bg-white text-black font-bold px-8 py-4 rounded-full text-lg hover:bg-gray-200 transition shadow"
              >
                Back to Home
              </Link>
              <button className="bg-white text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-200 transition shadow-lg">
                Proceed to Book
              </button>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="w-full bg-white py-6 flex justify-center items-center mt-auto shadow-inner">
        <span
          className="text-2xl md:text-4xl font-black tracking-[0.35em] text-black uppercase"
          style={{
            letterSpacing: '0.25em',
            textShadow: '2px 2px 0 #e5e5e5, 4px 4px 0 #00000010'
          }}
        >
          India’s first monochrome brand
        </span>
      </div>
    </div>
  );
};

export default Wishlist;
