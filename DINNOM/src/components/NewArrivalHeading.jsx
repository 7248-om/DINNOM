import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NewArrivalsHeading = () => {
  const underlineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      underlineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: underlineRef.current,
          start: 'top 90%',
        },
      }
    );
  }, []);

  return (
    <h2 className="relative text-center text-4xl sm:text-5xl font-playfair uppercase tracking-wide text-gray-900 dark:text-white mb-20">
      <span className="relative z-10">New Arrivals</span>
      <span
        ref={underlineRef}
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 origin-center w-36 h-[3px] bg-gradient-to-r from-black via-gray-800 to-black rounded-full"
      ></span>
    </h2>
  );
};

export default NewArrivalsHeading;

