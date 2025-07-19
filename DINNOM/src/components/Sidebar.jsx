import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BounceCards from './BounceCards';
import men1 from '../assets/Men/1shirts/ms4a.png';
import men2 from '../assets/Men/2pants/mb6a.png';
import men3 from '../assets/Men/3sweatshirts/mj1a.png';
import men4 from '../assets/Men/1shirts/ms8a.png';

const tabData = {
  Men: [
    { name: 'New Arrivals', image: men1 },
    { name: 'Cotton Linen', image: men2 },
    { name: 'Korean Edit', image: men3 },
    { name: 'Hot Merch', image: men4 },
  ],
  Women: [
    { name: 'Dresses', image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F1tops%2Fwt2a.webp?alt=media' },
    { name: 'Tees', image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F5footwear%2Fwf8a.png?alt=media' },
    { name: 'Loungewear', image:'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F2pants%2Fwp11a.webp?alt=media' },
    { name: 'Graphic Tees', image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2Fwomen%2F6caps%2Fwc2a.png?alt=media', },
    { name: 'Tops', image: 'https://firebasestorage.googleapis.com/v0/b/noire-svnit.firebasestorage.app/o/assets%2FWomen%2F4dresses%2Fwd6a.png?alt=media' },
  ],
};

const genderCategories = {
  Men: ['Shirts', 'Pants', 'Sweatshirts', 'Footwear', 'Cap'],
  Women: ['Tops', 'Pants', 'Sweatshirts', 'Dresses', 'Footwear', 'Cap'],
};

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [activeTab, setActiveTab] = useState('Men');
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/${activeTab.toLowerCase()}/${category.toLowerCase()}`);
    closeSidebar();
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-80 h-screen bg-white text-black z-50 p-6 overflow-y-auto shadow-xl transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeSidebar}
          className="absolute top-4 right-4 text-3xl font-bold text-gray-500 hover:text-black focus:outline-none"
        >
          &times;
        </button>

        {/* Logo */}
        <div className="mb-8 pt-2">
          <img
            src="/public/only logo.jpeg"
            alt="Logo"
            className="mx-auto h-12 w-auto object-contain"
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-around mb-6 border-b border-gray-200 pb-4 text-lg font-semibold">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative uppercase tracking-wider transition duration-300 pb-1 ${
                activeTab === tab
                  ? 'text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:bg-black'
                  : 'text-gray-400 hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Bounce Cards */}
        <div className="relative mb-8 flex justify-center">
  <BounceCards
    containerWidth={320}
    containerHeight={220}
    className="overflow-visible"
    images={tabData[activeTab].map((item) => item.image)}
    animationDelay={0.6}
    animationStagger={0.08}
    easeType="elastic.out(1, 0.5)"
    transformStyles={[
      'rotate(5deg) translate(-60px)',
      'rotate(0deg) translate(-20px)',
      'rotate(-5deg)',
      'rotate(5deg) translate(20px)',
      'rotate(-5deg) translate(60px)',
    ]}
    enableHover={true}
  />
</div>


        {/* Category Buttons */}
        <div className="space-y-3">
          {genderCategories[activeTab].map((category, i) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className="block w-full text-left text-[15px] font-medium text-gray-700 hover:text-black tracking-wide transition-all duration-200 translate-x-0 hover:translate-x-1"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
