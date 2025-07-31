import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaBoxOpen, FaAddressBook, FaUserCircle } from 'react-icons/fa';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-white text-black p-8 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Top Welcome Heading */}
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500">Welcome,{user?.displayName || 'User'}!</span>
          </h1>
          <p className="mt-4 text-lg text-gray-900">
            Your personal dashboard. Manage everything in one place.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Card 1 - Your Profile */}
          <Link to="/account" className="group block p-0.5 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="h-full bg-gray-900 rounded-lg p-8 text-center flex flex-col items-center justify-center">
              <FaUserCircle className="text-5xl text-purple-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-bold mb-2">Your Profile</h3>
              <p className="text-gray-400">Update your personal details and account settings.</p>
            </div>
          </Link>

          {/* Card 2 - Your Orders */}
          <Link to="/profile/orders" className="group block p-0.5 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 hover:from-teal-400 hover:to-blue-500 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="h-full bg-gray-900 rounded-lg p-8 text-center flex flex-col items-center justify-center">
              <FaBoxOpen className="text-5xl text-blue-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-bold mb-2">Your Orders</h3>
              <p className="text-gray-400">Track your purchases and view order history.</p>
            </div>
          </Link>

          {/* Card 3 - Your Addresses */}
          <Link to="/addresses" className="group block p-0.5 rounded-xl bg-gradient-to-br from-green-500 to-cyan-400 hover:from-cyan-400 hover:to-green-500 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="h-full bg-gray-900 rounded-lg p-8 text-center flex flex-col items-center justify-center">
              <FaAddressBook className="text-5xl text-green-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-2xl font-bold mb-2">Your Addresses</h3>
              <p className="text-gray-400">Manage your shipping and billing addresses.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
