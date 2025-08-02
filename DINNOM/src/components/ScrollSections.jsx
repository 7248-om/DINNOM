import {
  motion as Motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";

import img1 from "../assets/videos/model.webp";
import img2 from "../assets/videos/fabric.png";
import img3 from "../assets/videos/griffity.png";
import img4 from "../assets/videos/brand.png";

const sections = [
  { title: "PURE SHADOW", subtitle: "Where Darkness Defines Grace", image: img1 },
  { title: "PURE FORM", subtitle: "Simplicity in Black", image: img2 },
  { title: "URBAN CANVAS", subtitle: "The City in Monochrome", image: img3 },
  { title: "SIGNATURE BLACK", subtitle: "The Mark of NOIRÈ", image: img4 },
];

export default function ScrollGallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const section1Progress = useTransform(scrollYProgress, [0.0, 0.37], [0, 1]);
  const section2Progress = useTransform(scrollYProgress, [0.37, 0.62], [0, 1]);
  const section3Progress = useTransform(scrollYProgress, [0.62, 0.87], [0, 1]);
  const section4Progress = useTransform(scrollYProgress, [0.87, 1.0], [0, 1]);

  const sectionProgress = [
    section1Progress,
    section2Progress,
    section3Progress,
    section4Progress,
  ];

  useEffect(() => {
    let lastValue = 0;
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const direction = v > lastValue ? "down" : "up";
      lastValue = v;

      if (direction === "down") {
        if (v >= 0.87) setActiveIndex(3);
        else if (v >= 0.62) setActiveIndex(2);
        else if (v >= 0.37) setActiveIndex(1);
        else setActiveIndex(0);
      } else {
        if (v < 0.37) setActiveIndex(0);
        else if (v < 0.62) setActiveIndex(1);
        else if (v < 0.87) setActiveIndex(2);
        else setActiveIndex(3);
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const yTransforms = [
    useTransform(scrollYProgress, [0.25, 0.5], ["100%", "0%"]),
    useTransform(scrollYProgress, [0.5, 0.75], ["100%", "0%"]),
    useTransform(scrollYProgress, [0.75, 1], ["100%", "0%"]),
  ];

  return (
    <div className="h-[400vh] relative bg-black" ref={containerRef}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Image Layer */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${img1})`, zIndex: 1 }}
          />
          {[img2, img3, img4].map((img, i) => (
            <Motion.div
              key={i}
              className="absolute inset-0 bg-cover bg-center object-cover-top"
              style={{
                backgroundImage: `url(${img})`,
                y: yTransforms[i],
                zIndex: i + 2,
              }}
            />
          ))}
        </div>

        {/* Title Content */}
        <div className="absolute top-[30%] left-[6vw] z-50 w-[80%] font-playfair text-white pointer-events-none">
          <div className="relative h-[200px] overflow-hidden">
            <AnimatePresence mode="wait">
              <Motion.div
                key={sections[activeIndex].title}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute"
              >
                <h1
  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sans font-extrabold font-playfair uppercase leading-[1.1] tracking-tight"
>
  {sections[activeIndex].title}
</h1>
<p
  className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-3 md:mt-4 font-playfair opacity-80"
>
  {sections[activeIndex].subtitle}
</p>

              </Motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Circles */}
        <div className="absolute top-[70%] right-[6vw] z-50 space-y-4 text-white text-right">
          {sections.map((section, i) => (
            <div key={i} className="flex items-center gap-3 justify-end">
              <span
                className={`text-sm font-sans uppercase font-playfair ${
                  activeIndex === i ? "text-white" : "text-gray-400"
                }`}
              >
                {section.title}
              </span>
              <svg width="28" height="28" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="2"
                  fill="none"
                />
                <Motion.circle
                  cx="18"
                  cy="18"
                  r="16"
                  stroke="#ffffff"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="100"
                  strokeDashoffset="0"
                  style={{
                    pathLength: sectionProgress[i],
                  }}
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
