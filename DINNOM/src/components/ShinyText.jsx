// components/ShinyText.jsx
import React from 'react';

const ShinyText = ({ text, disabled = false, speed = 3, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-white inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(50,50,50,1) 40%, rgba(255,255,255,0.8) 50%, rgba(50,50,50,1) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animationDuration: animationDuration,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear'
      }}
    >
      {text}
    </div>
  );
};

export default ShinyText;

// Usage:
// <ShinyText text="Just some shiny text!" speed={3} className="text-2xl font-bold" />

// Required CSS:
// Add this to your global CSS (e.g., index.css or App.css):
//
// @keyframes shine {
//   0% {
//     background-position: -200% 0;
//   }
//   100% {
//     background-position: 200% 0;
//   }
// }
//
// .animate-shine {
//   animation-name: shine;
// }
