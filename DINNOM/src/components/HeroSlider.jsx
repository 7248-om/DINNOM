import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Marquee from 'react-fast-marquee';
import { motion as Motion } from 'framer-motion';
import coverImage from '../assets/videos/homepagefirst.png';

gsap.registerPlugin(ScrollTrigger);

const HeroSlider = () => {
  const imageRef = useRef(null);
  const scaleRef = useRef(1);
  const brandRef = useRef(null);
  const taglineRef = useRef(null);

  // GSAP scroll-triggered animation for tagline
  useEffect(() => {
    gsap.fromTo(taglineRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: taglineRef.current,
          start: 'top 85%',
        },
      }
    );
  }, []);

  // Image scale on scroll + title animation
  useEffect(() => {
    gsap.fromTo(brandRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.8
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.8
    });

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
    <section className="h-screen overflow-hidden relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src={coverImage}
          alt="NOIRÉ Cover"
          className="w-full h-full object-cover will-change-transform transition-transform duration-300 ease-out"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 text-center">
        
        {/* Brand Name */}
        <Motion.h1
          ref={brandRef}
          className="text-white font-playfair font-bold mb-6 drop-shadow-2xl tracking-wider
          text-5xl md:text-7xl lg:text-[10rem] xl:text-[12rem]"
          initial={{ opacity: 0, scale: 0.95, letterSpacing: '-0.05em' }}
          animate={{ opacity: 1, scale: 1, letterSpacing: '0.05em' }}
          transition={{ duration: 2, ease: 'easeOut', delay: 1.5 }}
          style={{
            textShadow: '0 0 30px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.6)',
          }}
        >
          NOIRÉ
        </Motion.h1>

        {/* Tagline with Marquee */}
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut', delay: 2.2 }}
        >
          <Marquee gradient={false} speed={40}>
            <p
              ref={taglineRef}
              className="text-white font-playfair uppercase tracking-[0.25em] text-lg md:text-2xl lg:text-4xl xl:text-5xl
              hover:scale-105 transition-transform duration-500 will-change-transform"
              style={{
                textShadow: '0 0 10px rgba(255,255,255,0.2), 0 0 30px rgba(255,255,255,0.4)',
                background: 'linear-gradient(to right, #ffffff, #cccccc)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              India's First Monochrome Fashion Brand
            </p>
          </Marquee>
        </Motion.div>
      </div>
    </section>
  );
};

export default HeroSlider;
