import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import img1 from '../assets/Men/1shirts/ms4a.png';
import img2 from '../assets/women/women_dresses/wdress1.png';
import img3 from '../assets/women/women_jackets/wjackets4 .png';

const products = [
  {
    title: 'NEW SEASON TROUSERS',
    desc: 'Cashmere Pleat Front Trouser — Burgundy',
    price: 'Rs. 77,900',
    image: img1,
  },
  {
    title: 'LUXE FALL TROUSERS',
    desc: 'Wide‑Leg Luxe Knit Trouser — Mocha',
    price: 'Rs. 65,000',
    image: img2,
  },
  {
    title: 'COMFORT IN STYLE',
    desc: 'Soft Cashmere Jogger — Cream',
    price: 'Rs. 58,500',
    image: img3,
  },
];

const ProductSliderEnhanced = () => {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const [active, setActive] = useState(0);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    const cursor = document.createElement('div');
    cursor.id = 'magnetic-cursor';
    container?.appendChild(cursor);

    gsap.set(cursor, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '36px',
      height: '36px',
      borderRadius: '50%',
      background: 'radial-gradient(circle at center, rgba(255,255,255,0.8), rgba(0,0,0,0.4))',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
      pointerEvents: 'none',
      zIndex: 9999,
      transform: 'translate(-50%, -50%)',
    });

    const moveCursor = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.18,
        ease: 'power3.out',
      });
    };

    const handleScroll = () => {
      gsap.to(cursor, {
        x: mousePos.current.x,
        y: mousePos.current.y,
        duration: 0.1,
        ease: 'power1.out',
      });
    };

    const hideCursor = () => gsap.set(cursor, { autoAlpha: 0 });
    const showCursor = () => gsap.set(cursor, { autoAlpha: 1 });

    container?.addEventListener('mouseenter', showCursor);
    container?.addEventListener('mouseleave', hideCursor);
    container?.addEventListener('mousemove', moveCursor);
    window.addEventListener('scroll', handleScroll);

    const magnets = container?.querySelectorAll('.magnet') || [];
    magnets.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        gsap.to(cursor, {
          scale: 2.5,
          background: 'radial-gradient(circle at center, rgba(255,255,255,1), rgba(0,0,0,0.2))',
          boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
        });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(cursor, {
          scale: 1,
          background: 'radial-gradient(circle at center, rgba(255,255,255,0.8), rgba(0,0,0,0.4))',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        });
      });
    });

    return () => {
      container?.removeEventListener('mousemove', moveCursor);
      container?.removeEventListener('mouseenter', showCursor);
      container?.removeEventListener('mouseleave', hideCursor);
      window.removeEventListener('scroll', handleScroll);
      container?.removeChild(cursor);
    };
  }, []);

  const handleMouseMove = (e) => {
    const img = e.currentTarget;
    const rect = img.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    gsap.to(img, { rotationY: x, rotationX: y, scale: 1.05, duration: 0.4 });
  };

  const resetMouse = (e) => {
    gsap.to(e.currentTarget, { rotationX: 0, rotationY: 0, scale: 1, duration: 0.6 });
  };

  return (
    <section
      ref={containerRef}
      className="relative z-30 bg-[#f7f8f4] pt-40 pb-40 overflow-visible select-none"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-40 -top-20 h-80 w-80 rounded-full bg-pink-400 opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-purple-400 opacity-20 blur-3xl" />

      {products.map((product, index) => (
        <div
          key={index}
          ref={(el) => (slidesRef.current[index] = el)}
          className={`relative px-6 md:px-24 flex flex-col md:flex-row items-center justify-between transition-opacity duration-700 ${
            index === active ? 'block' : 'hidden'
          }`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <img
              src={product.image}
              alt={product.desc}
              className="max-w-xs md:max-w-sm rounded-2xl shadow-2xl cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={resetMouse}
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4 tracking-tight">
              {product.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4 text-base sm:text-lg">
              {product.desc}
            </p>
            <p className="text-xl font-medium mb-8">{product.price}</p>

            <button
              onMouseEnter={(e) => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.25 })}
              onMouseLeave={(e) => gsap.to(e.currentTarget, { scale: 1, duration: 0.25 })}
              className="bg-black text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all magnet"
            >
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* Bottom Controls */}
      <div className="flex justify-center mt-16 gap-4">
        <button
          aria-label="Previous"
          onClick={() => setActive((prev) => (prev - 1 + products.length) % products.length)}
          className="group rounded-full p-3 backdrop-blur-lg bg-white/70 hover:bg-white shadow-md hover:shadow-lg transition-all"
        >
          <ArrowLeft className="h-6 w-6 text-gray-800 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          aria-label="Next"
          onClick={() => setActive((prev) => (prev + 1) % products.length)}
          className="group rounded-full p-3 backdrop-blur-lg bg-white/70 hover:bg-white shadow-md hover:shadow-lg transition-all"
        >
          <ArrowRight className="h-6 w-6 text-gray-800 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ProductSliderEnhanced;
