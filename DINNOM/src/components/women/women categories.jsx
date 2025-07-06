import React from 'react'
import img1 from '../../assets/categories/women components/10.png'
import img2 from '../../assets/categories/women components/11.png'
import img3 from '../../assets/categories/women components/12.png'
import img4 from '../../assets/categories/women components/13.png'
import img5 from '../../assets/categories/women components/14.png'
import img6 from '../../assets/categories/women components/15.png'
import img7 from '../../assets/categories/women components/16.png'
import img8 from '../../assets/categories/women components/17.png'
import img9 from '../../assets/categories/women components/18.png'

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const WomenCategories = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-8">
      <h2
        className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest mb-10 bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600 bg-clip-text text-transparent drop-shadow-lg"
        style={{
          letterSpacing: '0.18em',
          textShadow: '2px 2px 8px #c2185b, 0 2px 16px #fff2'
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
export default WomenCategories
