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
        <button className="bg-white text-black font-semibold px-4 py-2 rounded-full text-sm mb-6">
          Our Fabrics
        </button>

        <div className="text-3xl md:text-5xl font-bold leading-snug space-y-4">
          {lines.map((line, i) => (
            <span key={i} className="fade-line block">
              {line}
            </span>
          ))}
        </div>

        <a
          href="#"
          className="inline-block mt-6 text-sm border-b border-white hover:translate-x-1 transition-transform"
        >
          ALL FABRICS →
        </a>
      </Tilt>
    </section>
  );
};

export default FabricSection;
