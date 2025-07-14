import React, { useEffect, useState } from 'react';

const IntroTransition = ({ image }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={image}
        alt="Fashion"
        className="w-full h-full object-cover"
      />

      <h1
        className={`
          absolute text-white font-extrabold font-mulish
          transition-all duration-[2000ms] ease-in-out
          text-[6rem] md:text-[9rem] leading-none
          ${animate
            ? 'left-[25%] top-[30%] scale-100'
            : 'left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2.0]'
          }
        `}
      >
        MEN
      </h1>
    </div>
  );
};

export default IntroTransition;
