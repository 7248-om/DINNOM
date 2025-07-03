import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/navbar/only logo.jpeg'
import searchIcon from '../assets/navbar/images.png'
import cartIcon from '../assets/navbar/shopping-cart-icon-illustration-free-vector.jpg'
import hamburgerIcon from '../assets/navbar/three-lines-hamburger-menu-option-line-icon-symbol-app-list-drop-down-more-sidebar-side-bar-expand-application-website-drawer-page-info-graphic-vector.jpg'
import userIcon from '../assets/navbar/user-profile-icon-free-vector.jpg'

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow flex items-center justify-between px-8 py-5 z-50 h-24">
      {/* Left: Hamburger + Nav Links */}
      <div className="flex items-center space-x-8">
        {/* Hamburger Icon */}
        <button onClick={toggleSidebar} className="p-2 mr-6">
          <img
            src={hamburgerIcon}
            alt="Menu"
            className="w-9 h-9 object-contain"
          />
        </button>

        {/* Nav Links (hidden on small screens) */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 font-extrabold text-xl hover:text-red-600 transition">Men</a>
          <a href="#" className="text-gray-700 font-extrabold text-xl hover:text-red-600 transition">Women</a>
          <a href="#" className="text-gray-700 font-extrabold text-xl hover:text-red-600 transition">Kids</a>
        </div>
      </div>

      {/* Center: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <img src={logo} alt="Logo" className="h-16 w-auto" />
      </div>

      {/* Right: Search, Cart, User */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-[#f3f3f3] rounded-full px-4 py-2 w-56 md:w-80">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none flex-1 px-2 text-gray-700 placeholder:italic placeholder:text-gray-500"
          />
          <img src={searchIcon} alt="Search" className="w-7 h-7 object-contain" />
        </div>
        {/* Cart Icon links to wishlist */}
        <Link to="/wishlist" className="p-2 hover:bg-gray-100 rounded-full">
          <img src={cartIcon} alt="Cart" className="w-8 h-8 object-contain" />
        </Link>
        {/* User Icon */}
        <a href="#" className="p-2 hover:bg-gray-100 rounded-full">
          <img src={userIcon} alt="User" className="w-8 h-8 object-contain" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
