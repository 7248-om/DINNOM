// components/GridMoodBoard.jsx
import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import fabricImg from '../assets/videos/fabric.jpeg';

const GridMoodBoard = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const yText = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Fabric Image */}
      <img
        src={fabricImg}
        alt="Fabric Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Centered Parallax Text */}
      <Motion.h2
        style={{ y: yText }}
        className="relative z-20 text-5xl md:text-7xl font-[700] tracking-[0.4em] text-center uppercase"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-300 to-white drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">
          ESSENCE.
        </span>
      </Motion.h2>
    </section>
  );
};

export default GridMoodBoard;
