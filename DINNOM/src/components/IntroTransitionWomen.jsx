import React, { useEffect, useState } from 'react';

const IntroTransition = ({ image }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-black flex flex-col">
      {/* Static WOMEN for small screens - just above the image */}
      <div className="block sm:hidden pt-8 text-center">
        <h1 className="text-[3.5rem] xs:text-[4rem] font-extrabold text-white leading-none">
          WOMEN
        </h1>
      </div>

      {/* Image section with overlay for larger screens */}
      <div className="relative w-full flex-1">
        {/* Background image */}
        <img
          src={image}
          alt="Fashion"
          className="w-full h-full object-contain sm:object-cover bg-black"
        />

        {/* Animated heading for sm and up */}
        <h1
          className={`
            hidden sm:block absolute text-white font-extrabold font-mulish
            transition-all duration-[2000ms] ease-in-out
            text-[6rem] md:text-[8rem] lg:text-[9rem] leading-none tracking-tight
            ${
              animate
                ? 'left-[13%] top-[30%] scale-100'
                : 'left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2.0]'
            }
          `}
        >
          WOMEN
        </h1>
      </div>
    </div>
  );
};

export default IntroTransition;
