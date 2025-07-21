import React from 'react';
import Tilt from 'react-parallax-tilt';

import womenImg from '../assets/women/seasonal/ws5.webp';
import menImg from '../assets/Men/men categories/oversized_categories.png';
import sneakersImg from '../assets/Men/sneakers/images (6).jpg';

const GenerationShowcase = () => {
  const categories = [
    {
      name: 'Women',
      img: womenImg,
      link: '/women'
    },
    {
      name: 'Men',
      img: menImg,
      link: '/men'
    },
    {
      name: 'Sneakers',
      img: sneakersImg,
      link: '/kids'
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="py-20 text-black text-center">
        <h2
          className="text-4xl md:text-6xl font-extrabold tracking-tight mb-12 transition-transform duration-300 hover:scale-105"
        >
          For every generation.
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6">
          {categories.map((cat, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              scale={1.05}
              transitionSpeed={1500}
              className="w-[240px] md:w-[280px] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl group cursor-pointer"
            >
              <a href={cat.link} className="block relative">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-[360px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-lg font-medium py-2 text-center">
                  {cat.name}
                </div>
              </a>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenerationShowcase;
