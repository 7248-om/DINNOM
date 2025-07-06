import React, { useEffect, useRef, useState } from 'react';
import Tilt from 'react-parallax-tilt';

const FabricSection = () => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
      setScrollY(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lines = [
    'All of the fabrics we supply are',
    'manufactured using good',
    'standard materials, and following',
    'good standard manufacturing processes.',
  ];

  const getOpacity = (index) => {
    const delay = index * 0.15;
    const visible = scrollY - delay;
    return Math.min(1, Math.max(0, visible * 2));
  };

  return (
    <div className="">
      <section
        ref={sectionRef}
        className="relative min-h-screen bg-fixed bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable={false}
          className="relative z-10 px-6 max-w-3xl"
        >
          <button className="bg-white text-black font-semibold px-4 py-2 rounded-full text-sm mb-6">
            Our Fabrics
          </button>

          <div className="text-3xl md:text-5xl font-bold leading-snug space-y-4">
            {lines.map((line, i) => (
              <span
                key={i}
                className="block"
                style={{
                  opacity: getOpacity(i),
                  color: 'white',
                  transition: 'opacity 0.5s ease',
                }}
              >
                {line}
              </span>
            ))}
          </div>

          <a
            href="#"
            className="inline-block mt-6 text-sm border-b border-white hover:translate-x-1 transition-transform text-white"
          >
            ALL FABRICS →
          </a>
        </Tilt>
      </section>
    </div>
  );
};

export default FabricSection;
