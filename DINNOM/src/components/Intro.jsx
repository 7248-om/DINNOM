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
          initial={{ clipPath: 'circle(150% at 50% 50%)' }} // fully visible initially
          animate={{ clipPath: 'circle(0% at 50% 100%)' }} // exits with upward scoop
          exit={{ opacity: 0 }}
          transition={{ duration: 3, ease: 'easeInOut', delay: 0.5 }} // slower + smooth
        >
          {/* Wave background */}
          <div
            className="absolute inset-0 opacity-10 animate-wave bg-repeat-x bg-cover z-0"
            style={{
              backgroundImage: `url('https://raw.githubusercontent.com/kognise/water.css/master/docs/wave.svg')`,
            }}
          />

          {/* Centered one-liner text */}
          <Motion.h1
            className="text-white text-2xl sm:text-3xl tracking-widest uppercase font-semibold z-10"
            initial={{ opacity: 0, letterSpacing: '-0.1em' }}
            animate={{ opacity: 1, letterSpacing: '0.1em' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            Welcome to NOIRÉ
          </Motion.h1>
        </Motion.div>
      )}
    </AnimatePresence>
  );
};

export default Intro;
