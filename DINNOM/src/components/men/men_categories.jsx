import React from 'react';


import img1 from '../../assets/categories/menCategories/1.png';
import img2 from '../../assets/categories/menCategories/2.png';
import img3 from '../../assets/categories/menCategories/3.png';
import img4 from '../../assets/categories/menCategories/4.png';
import img5 from '../../assets/categories/menCategories/5.png';
import img6 from '../../assets/categories/menCategories/6.png';
import img7 from '../../assets/categories/menCategories/7.png';
import img8 from '../../assets/categories/menCategories/8.png';
import img9 from '../../assets/categories/menCategories/9.png';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const MenCategories = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-8">
      <h2
        className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-10 bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent drop-shadow-lg"
        style={{
          letterSpacing: '0.18em',
          textShadow: '2px 2px 8px #222, 0 2px 16px #fff2'
        }}
      >
        Our Categories
      </h2>
      <div className="grid grid-cols-3 gap-3 w-full max-w-4xl">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md bg-white/10 transition-transform duration-300 hover:scale-105 group flex items-center justify-center aspect-square"
          >
            <img
              src={src}
              alt={`Category ${idx + 1}`}
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenCategories;
