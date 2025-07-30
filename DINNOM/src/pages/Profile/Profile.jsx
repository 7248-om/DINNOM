import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaBoxOpen, FaAddressBook, FaUserCircle } from 'react-icons/fa';
import CardSwap, { Card } from '../../components/CardSwap.jsx';
import cardImage from '../../assets/Men/images/img1.jpg'; // Import the image

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e1e4e] to-[#0f0f2e] text-white px-8 py-12">
      
      {/* Top Welcome Heading */}
      <h1 className="text-5xl font-bold text-center mb-16 pt-10">
        Welcome, {user?.displayName || "User"}! <span className="inline-block animate-waving-hand">👋</span>
      </h1>

      {/* Content Split: 60/40 */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-1">
        
        {/* Left Side Text */}
        <div className="lg:w-3/5 space-y-6 animate-fade-in-up pl-50 pt-30">
          <h2 className="text-4xl font-extrabold tracking-tight leading-tight">
            Manage Everything,<br className="hidden sm:block" /> Effortlessly 🚀
          </h2>
          <p className="text-2xl text-gray-300 max-w-md">
            Access your orders, update delivery addresses, or tweak your profile settings — all in one beautiful space.
          </p>
          <p className="text-lg italic text-gray-400 max-w-sm">
            Your data is secure, and your style is unmatched.
          </p>
        </div>

        {/* Right Side Cards */}
        <div className="lg:w-2/5 -mt-10 flex justify-center items-center">
          <CardSwap
            width={720} // Wider Cards
            height={600}
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            {/* Card 1 - Orders */}
            <Card>
              <Link to="/profile/orders">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg bg-black">
                  <img
                    src={cardImage}
                    alt="Orders"
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition duration-300"
                  />
                  <div className="absolute top-0 left-0 bg-black bg-opacity-60 p-4 rounded-br-xl flex items-center gap-2">
                    <FaBoxOpen className="text-yellow-400 text-xl" />
                    <span className="text-white text-lg font-semibold">Your Orders</span>
                  </div>
                </div>
              </Link>
            </Card>

            {/* Card 2 - Addresses */}
            <Card>
              <Link to="/addresses">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg bg-black">
                  <img
                    src={cardImage}
                    alt="Addresses"
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition duration-300"
                  />
                  <div className="absolute top-0 left-0 bg-black bg-opacity-60 p-4 rounded-br-xl flex items-center gap-2">
                    <FaAddressBook className="text-green-300 text-xl" />
                    <span className="text-white text-lg font-semibold">Your Addresses</span>
                  </div>
                </div>
              </Link>
            </Card>

            {/* Card 3 - Profile */}
            <Card>
              <Link to="/account">
                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg bg-black">
                  <img
                    src={cardImage}
                    alt="Profile"
                    className="w-full h-full object-cover opacity-70 hover:opacity-100 transition duration-300"
                  />
                  <div className="absolute top-0 left-0 bg-black bg-opacity-60 p-4 rounded-br-xl flex items-center gap-2">
                    <FaUserCircle className="text-blue-400 text-xl" />
                    <span className="text-white text-lg font-semibold">Your Profile</span>
                  </div>
                </div>
              </Link>
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  );
};

export default Profile;
