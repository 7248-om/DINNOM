import React, { useEffect, useState } from 'react';

const IntroTransition = ({ image }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-black flex flex-col">
      {/* Static MEN for small screens - placed above image */}
      <div className="block sm:hidden pt-8 text-center">
        <h1 className="text-[3.5rem] xs:text-[4rem] font-extrabold text-white leading-none">
          MEN
        </h1>
      </div>

      {/* Image with overlay for larger screens */}
      <div className="relative w-full flex-1">
        {/* Background image */}
        <img
          src={image}
          alt="Fashion"
          className="w-full h-full object-contain sm:object-cover bg-black"
        />

        {/* Animated text for sm and above */}
        <h1
          className={`
            hidden sm:block absolute text-white font-extrabold font-mulish
            transition-all duration-[2000ms] ease-in-out
            text-[6rem] md:text-[8rem] lg:text-[9rem] leading-none tracking-tight
            ${
              animate
                ? 'left-[25%] top-[30%] scale-100'
                : 'left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[2.0]'
            }
          `}
        >
          MEN
        </h1>
      </div>
    </div>
  );
};

export default IntroTransition;
