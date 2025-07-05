import React from 'react'
const images = [
  require('../../assets/categories/men components/1.png'),
  require('../../assets/categories/men components/2.png'),
  require('../../assets/categories/men components/3.png'),
  require('../../assets/categories/men components/4.png'),
  require('../../assets/categories/men components/5.png'),
  require('../../assets/categories/men components/6.png'),
  require('../../assets/categories/men components/7.png'),
  require('../../assets/categories/men components/8.png'),
  require('../../assets/categories/men components/9.png'),
];
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
      <div className="grid grid-cols-3 gap-3 w-full max-w-4xl h-[70vh]">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="overflow-hidden rounded-xl shadow-md bg-white/10 transition-transform duration-300 hover:scale-105 group flex items-center justify-center"
          >
            <img
              src={src}
              alt={`Category ${idx + 1}`}
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-110"
              draggable={false}
              style={{ aspectRatio: '1/1' }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default MenCategories
