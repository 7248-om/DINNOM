import React, { useEffect, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FabricSection = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;

    // Parallax background scroll effect
    gsap.to(bg, {
      y: 80,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Lines fade in on scroll
    const lines = section.querySelectorAll('.fade-line');
    lines.forEach((line, i) => {
      gsap.fromTo(
        line,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: line,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  const lines = [
    'All of the fabrics we supply are',
    'manufactured using good',
    'standard materials, and following',
    'good standard manufacturing processes.',
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background div */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Foreground content */}
      <Tilt
        tiltMaxAngleX={5}
        tiltMaxAngleY={5}
        glareEnable={false}
        scale={1.02}
        transitionSpeed={250}
        className="relative z-10 px-6 max-w-3xl text-white text-center"
      >
        <div className="mb-16">
          <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 tracking-[0.2em] leading-tight uppercase">
            OUR FABRICS
          </h1>
          {/* Traditional title underline */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-0.5 bg-white opacity-60"></div>
            <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div className="w-20 h-0.5 bg-white opacity-80"></div>
            <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
            <div className="w-16 h-0.5 bg-white opacity-60"></div>
          </div>
        </div>

        <div className="text-3xl md:text-5xl font-semibold leading-snug space-y-4">
          {lines.map((line, i) => (
            <span key={i} className="fade-line block">
              {line}
            </span>
          ))}
        </div>

      </Tilt>
    </section>
  );
};

export default FabricSection;
