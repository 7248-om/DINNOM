// components/GridMoodBoard.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion as Motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import fabricImg from '../assets/videos/fabric.jpeg';

const GridMoodBoard = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const words = ['ESSENCE.', 'ELEGANCE.', 'EXCLUSIVE.', 'ELEVATE.', 'EMBRACE.'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const yText = useTransform(scrollYProgress, [0, 1], [60, -60]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Fabric Image */}
      <img
        src={fabricImg}
        alt="Fabric Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Centered Animated Text */}
      <div className="absolute inset-0 z-30 flex items-center justify-center px-4">
        <Motion.div style={{ y: yText }} className="flex items-center justify-center w-full">
          <div className="relative overflow-hidden w-full text-center">
            <AnimatePresence mode="wait">
              <Motion.span
                key={currentWordIndex}
                initial={{
                  y: 120,
                  opacity: 0,
                  scale: 0.7,
                  rotateX: -90,
                  filter: 'blur(8px)',
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                  rotateX: 0,
                  filter: 'blur(0px)',
                }}
                exit={{
                  y: -120,
                  opacity: 0,
                  scale: 0.7,
                  rotateX: 90,
                  filter: 'blur(8px)',
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: 'spring',
                  stiffness: 80,
                  damping: 20,
                }}
                className="block text-white font-bold font-playfair tracking-[0.15em] uppercase whitespace-nowrap"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 9rem)', // 👈 Responsive font size
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'center center',
                }}
              >
                {words[currentWordIndex]}
              </Motion.span>
            </AnimatePresence>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default GridMoodBoard;
