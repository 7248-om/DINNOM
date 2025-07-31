import React from 'react';
import { Link } from 'react-router-dom';
import { BiSearch, BiSolidBasket, BiUserCircle } from "react-icons/bi";
import { useAuth } from '../context/AuthContext.jsx';
import { BsJustify } from "react-icons/bs";
import logo from '../assets/navbar/only logo.jpeg';

const Navbar = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow flex items-center justify-between px-8 py-5 z-50 h-20">
      <div className="flex items-center space-x-8">
        <button onClick={toggleSidebar} className="p-2 mr-6 flex items-center justify-center">
          <BsJustify className="w-9 h-9 text-gray-700" />
        </button>
        
        <div className="hidden md:flex space-x-8">
  <Link to="/men" className="text-gray-700 font-extrabold text-xl hover:text-red-600 transition">Men</Link>
  <Link to="/women" className="text-gray-700 font-extrabold text-xl hover:text-red-600 transition">Women</Link>
  
  {/* ✅ Show only if user is admin */}
  {user?.isAdmin && (
    <Link to="/admin" className="text-gray-700 font-extrabold text-xl hover:text-red-600 transition">
      Admin
    </Link>
  )}
</div>
      </div>


      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center bg-[#f3f3f3] rounded-full px-4 py-2 w-56 md:w-80">
          
        </div>
        <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full flex items-center justify-center">
  <BiSolidBasket className="w-8 h-8 text-gray-700" />
</Link>

          {user ? (
  <>
    <Link to="/profile">
      {user.photoURL ? (
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
        />
      ) : (
        <BiUserCircle className="w-8 h-8 text-gray-700 cursor-pointer" />
      )}
    </Link>
    
    <button
      onClick={logout}
      className="ml-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-700 transition"
    >
      Logout
    </button>
  </>
)
: (
            <Link
              to="/login"
              className="p-2 hover:bg-gray-100 rounded-full flex items-center justify-center"
            >
              <BiUserCircle className="w-8 h-8 text-gray-700" />
            </Link>)}
      </div>
    </nav>
  );
};

export default Navbar;
