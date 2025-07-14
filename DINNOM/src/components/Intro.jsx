import React, { useEffect, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const Intro = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3500); // 0.5s static + 3s animation
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showIntro && (
        <Motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          initial={{ clipPath: 'circle(150% at 50% 50%)' }}
          animate={{ clipPath: 'circle(0% at 50% 100%)' }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: 'easeInOut', delay: 0.5 }}
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black z-0" />

          {/* Glow effect (glassmorphism) */}
          <Motion.div
            className="absolute w-[320px] h-[320px] bg-white/10 rounded-full blur-3xl z-0"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />

          {/* Main Text */}
          <Motion.h1
            className="text-white text-[2.4rem] sm:text-5xl tracking-[0.3em] font-extralight z-10 uppercase"
            initial={{ opacity: 0, letterSpacing: '-0.1em', scale: 0.95 }}
            animate={{ opacity: 1, letterSpacing: '0.3em', scale: 1 }}
            transition={{ duration: 1.6, ease: 'easeOut' }}
          >
            Welcome to <span className="font-serif text-white tracking-[0.25em]">NOIRÉ</span>
          </Motion.h1>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
