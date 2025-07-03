import React, { useState } from 'react'
import Navbar from './navbar'
import emptyCart from '../assets/navbar/empty cart.png'

const initialWishlistItems = [
  {
    id: 1,
    name: "Black Oversized T-Shirt",
    price: "₹999",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    quantity: 1
  },
  {
    id: 2,
    name: "Monochrome Hoodie",
    price: "₹1,499",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    quantity: 1
  }
]

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);

  const handleRemove = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const handleQuantity = (id, delta) => {
    setWishlistItems(wishlistItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <div className="max-w-4xl mx-auto pt-32 pb-12 px-4 flex-1 w-full">
        {/* Stylish "My Cart" heading */}
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
        {wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-20">
            <img src={emptyCart} alt="Empty Cart" className="w-52 h-52 object-contain mb-6 opacity-90" />
            <div className="text-center text-gray-100 text-2xl font-extrabold mb-2 drop-shadow-lg">
              Please add something
            </div>
            <div className="text-center text-gray-200 italic text-lg font-extrabold drop-shadow-lg">
              even the carts have emotions ...
            </div>
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
            <div className="flex justify-end mt-10">
              <button className="bg-white text-black font-bold px-10 py-4 rounded-full text-lg hover:bg-gray-200 transition shadow-lg">
                Proceed to Book
              </button>
            </div>
          </>
        )}
      </div>
      {/* Marker line at the bottom */}
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
  )
}

export default Wishlist
