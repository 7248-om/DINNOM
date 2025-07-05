import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiSolidBasket, BiUserCircle } from "react-icons/bi";
import { BsJustify } from "react-icons/bs";
import logo from '../assets/navbar/only logo.jpeg';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow flex items-center justify-between px-8 py-5 z-50 h-24">
      <div className="flex items-center space-x-8">
        <button onClick={toggleSidebar} className="p-2 mr-6 flex items-center justify-center">
          <BsJustify className="w-9 h-9 text-gray-700" />
        </button>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 font-extrabold text-xl hover:text-red-600 transition">Men</a>
          <a href="#" className="text-gray-700 font-extrabold text-xl hover:text-red-600 transition">Women</a>
          <a href="#" className="text-gray-700 font-extrabold text-xl hover:text-red-600 transition">Kids</a>
        </div>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-[#f3f3f3] rounded-full px-4 py-2 w-56 md:w-80">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none flex-1 px-2 text-gray-700 placeholder:italic placeholder:text-gray-500"
          />
          <BiSearch className="w-7 h-7 text-gray-600" />
        </div>
        <Link to="/wishlist" className="p-2 hover:bg-gray-100 rounded-full flex items-center justify-center">
          <BiSolidBasket className="w-8 h-8 text-gray-700" />
        </Link>
        <Link to="/login" className="p-2 hover:bg-gray-100 rounded-full flex items-center justify-center">
          <BiUserCircle className="w-8 h-8 text-gray-700" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
