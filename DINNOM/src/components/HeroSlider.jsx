import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const images = [
  {
    src: '/images/slide1.jpg',
    text: 'Red, white & denim.',
    subtext: 'The signature summer palette, made even better with new cuts and loose fits.',
  },
  {
    src: '/images/slide2.jpg',
    text: 'Summer ready.',
    subtext: 'Breezy fits and bright looks for warm days ahead.',
  },
  {
    src: '/images/slide3.jpg',
    text: 'Style in motion.',
    subtext: 'Comfort meets cool in our latest arrivals.',
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [showDropdown, setShowDropdown] = useState(null); // 'edit' | 'arrivals' | null
  const navigate = useNavigate();

  const categories = ['men', 'women', 'kids'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = images[index];

  return (
    <div className="relative w-full h-[90vh]">
      {/* Background Image */}
      <img
        src={current.src}
        alt="Hero Slide"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0">

      {/* Main Text - left side vertically centered */}
      <div className="absolute inset-0 flex items-center justify-start pl-10 md:pl-20 text-white text-left z-10">
  <div className="max-w-xl">
    <h1 className="text-4xl md:text-6xl font-bold">{current.text}</h1>
  </div>
</div>


      {/* Subtext + Dropdown Buttons - bottom left */}
      <div className="absolute bottom-10 left-10 md:left-20 max-w-xl text-white">
        <p className="text-m md:text-medium mb-4">{current.subtext}</p>
        <div className="flex space-x-4 relative z-10">
          {/* Shop the Edit Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(showDropdown === 'edit' ? null : 'edit')}
              className="bg-white text-black px-4 py-2 font-medium rounded hover:bg-black hover:text-white"
            >
              Shop the edit
            </button>
            {showDropdown === 'edit' && (
              <div className="absolute mt-2 bg-white text-black rounded shadow-md">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    onClick={() => {
                      navigate(`/shop-edit/${cat}`);
                      setShowDropdown(null);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Shop New Arrivals Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(showDropdown === 'arrivals' ? null : 'arrivals')}
              className="bg-white text-black px-4 py-2 font-medium rounded hover:bg-black hover:text-white"
            >
              Shop new arrivals
            </button>
            {showDropdown === 'arrivals' && (
              <div className="absolute mt-2 bg-white text-black rounded shadow-md">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    onClick={() => {
                      navigate(`/new-arrivals/${cat}`);
                      setShowDropdown(null);
                    }}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
      </div>
      {/* Dots */}
      <div className="absolute bottom-6 right-6 flex space-x-1">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${i === index ? 'bg-white' : 'bg-gray-400'} transition-all`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
