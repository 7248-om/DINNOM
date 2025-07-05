import React, { useEffect, useRef } from 'react';
import coverImage from '../assets/videos/ChatGPT Image Jul 5, 2025 at 07_32_51 PM.png';

const HeroSlider = () => {
  const imageRef = useRef(null);
  const scaleRef = useRef(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = Math.min(1 + scrollY * 0.0005, 1.2);
      scaleRef.current = newScale;

      requestAnimationFrame(() => {
        if (imageRef.current) {
          imageRef.current.style.transform = `scale(${scaleRef.current})`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="h-[100vh] overflow-hidden relative">
      <img
        ref={imageRef}
        src={coverImage}
        alt="NOIRÉ Cover"
        className="w-full h-full object-cover transition-transform duration-200 ease-out will-change-transform"
      />
    </section>
  );
};

export default HeroSlider;
