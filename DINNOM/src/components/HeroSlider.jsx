import React, { useEffect, useRef, useState } from 'react';
import coverImage from '../assets/videos/ChatGPT Image Jul 5, 2025 at 07_32_51 PM.png'; // Make sure to put your image in the right path

const HeroSlider = () => {
  const imageRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY * 0.0005; // Adjust zoom sensitivity here
      if (imageRef.current) {
        setScale(Math.min(newScale, 1.2)); // Cap max zoom
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="h-[100vh] overflow-hidden relative">
      <img
        ref={imageRef}
        src={coverImage}
        alt="NOIRÉ Cover"
        style={{ transform: `scale(${scale})` }}
        className="w-full h-full object-cover transition-transform duration-100"
      />
    </section>
  );
};

export default HeroSlider;
