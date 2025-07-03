import React, { useState } from 'react';
import BounceCards from './BounceCards';
import men1 from '../assets/Men/shirts/men1.jpg';
import men2 from '../assets/Men/shirts/men2.jpg';
import men3 from '../assets/Men/shirts/men3.jpg';
import men4 from '../assets/Men/shirts/men5.jpg';

const tabData = {
  Men: [
    { name: 'New Arrivals', image: men1 },
    { name: 'Cotton Linen', image: men2 },
    { name: 'Korean Edit', image: men3 },
    { name: 'Hot Merch', image: men4 },
  ],
  Women: [
    { name: 'Dresses', image: 'https://via.placeholder.com/400' },
    { name: 'Tees', image: 'https://via.placeholder.com/500' },
    { name: 'Loungewear', image: 'https://via.placeholder.com/600' },
    { name: 'Graphic Tees', image: 'https://via.placeholder.com/700' },
    { name: 'Tops', image: 'https://via.placeholder.com/300' },
  ],
  Kids: [
    { name: 'Marvel', image: 'https://via.placeholder.com/400' },
    { name: 'Cartoons', image: 'https://via.placeholder.com/500' },
    { name: 'Superhero Tees', image: 'https://via.placeholder.com/600' },
    { name: 'Bottoms', image: 'https://via.placeholder.com/700' },
    { name: 'Jackets', image: 'https://via.placeholder.com/300' },
  ],
};

const accessoriesImages = [
  'https://via.placeholder.com/80',
  'https://via.placeholder.com/80',
  'https://via.placeholder.com/80',
  'https://via.placeholder.com/80',
];

const dropdowns = ['Topwear', 'Bottomwear', 'Bestsellers', 'All Accessories'];

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [activeTab, setActiveTab] = useState('Men');
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-80 h-full bg-white text-black z-50 p-6 overflow-y-auto shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="mb-8">
          <img src="https://via.placeholder.com/150x40?text=LOGO" alt="Logo" className="mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex justify-between mb-6 border-b border-gray-300 pb-4 text-lg font-semibold">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`transition ${
                activeTab === tab ? 'text-black border-b-2 border-black' : 'text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Bounce Cards */}
        <div className="flex justify-center mb-8">
          <BounceCards
            className="custom-bounceCards"
            images={tabData[activeTab].map((item) => item.image)}
            containerWidth={320}
            containerHeight={220}
            animationDelay={0.6}
            animationStagger={0.08}
            easeType="elastic.out(1, 0.5)"
            transformStyles={[
              "rotate(5deg) translate(-150px)",
              "rotate(0deg) translate(-70px)",
              "rotate(-5deg)",
              "rotate(5deg) translate(70px)",
              "rotate(-5deg) translate(150px)",
            ]}
            enableHover={true}
          />
        </div>

        {/* Dropdown Sections */}
        <div className="space-y-6">
          {dropdowns.map((section) => (
            <div key={section}>
              <button
                className="w-full flex justify-between items-center text-left font-medium text-base"
                onClick={() => toggleSection(section)}
              >
                {section}
                <span>{openSections[section] ? '−' : '+'}</span>
              </button>

              {openSections[section] && (
                <div className="ml-2 mt-3">
                  {section === 'All Accessories' ? (
                    <div className="flex gap-4 overflow-x-auto">
                      {accessoriesImages.map((src, i) => (
                        <img
                          key={i}
                          src={src}
                          alt={`Accessory ${i}`}
                          className="w-20 h-20 rounded object-cover"
                        />
                      ))}
                    </div>
                  ) : (
                    <ul className="text-sm text-gray-600 space-y-2 mt-2 ml-2">
                      <li>Item 1</li>
                      <li>Item 2</li>
                      <li>Item 3</li>
                    </ul>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
