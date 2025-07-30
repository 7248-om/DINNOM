import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import coverImage from '../assets/videos/homepagefirst.png';

const HeroSlider = () => {
  const imageRef = useRef(null);
  const scaleRef = useRef(1);
  const titleRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    // Initialize GSAP animations for title and tagline
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Animate title (NOIRÈ)
    tl.fromTo(titleRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.8
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.5,
      ease: "power3.out"
    })
    // Animate tagline
    .fromTo(taglineRef.current, {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out"
    }, "-=0.8")

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
      
      {/* Overlay with brand name and tagline */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        {/* Brand Name */}
        <h1 
          ref={titleRef}
          className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold text-white mb-6 tracking-wider drop-shadow-2xl"
          style={{
            fontFamily: 'serif',
            textShadow: '0 0 30px rgba(0,0,0,0.8), 0 0 60px rgba(0,0,0,0.6)'
          }}
        >
          NOIRÉ
        </h1>
        
        {/* Tagline */}
        <p 
          ref={taglineRef}
          className="text-xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-medium tracking-widest uppercase opacity-90"
          style={{
            textShadow: '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)',
            letterSpacing: '0.3em'
          }}
        >
          India's First Monochrome Fashion Brand
        </p>
      </div>
    </section>
  );
};

export default HeroSlider;
