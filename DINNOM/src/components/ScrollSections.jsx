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
  { title: "RAW PRESENCE", subtitle: "Power in Contrast", image: img1 },
  { title: "FABRIC TRUTH", subtitle: "Materials in Focus", image: img2 },
  { title: "SPEAK STREET", subtitle: "Culture & Noise", image: img3 },
  { title: "LABELLED", subtitle: "Identity & Branding", image: img4 },
];

export default function ScrollGallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      const index = Math.floor(latest * sections.length);
      const clamped = Math.max(0, Math.min(sections.length - 1, index));
      if (clamped !== activeIndex) {
        setPrevIndex(activeIndex);
        setActiveIndex(clamped);
      }
    });
  }, [scrollYProgress, activeIndex]);

  const direction = activeIndex > prevIndex ? "up" : "down";

  // ✅ FIXED: useTransform only used outside .map
  const y0 = useTransform(scrollYProgress, [0.0, 0.25], ["100%", "0%"]);
  const y1 = useTransform(scrollYProgress, [0.25, 0.5], ["100%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0.5, 0.75], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.75, 1.0], ["100%", "0%"]);

  const imageTransforms = [y0, y1, y2, y3];

  return (
    <div ref={containerRef} className="h-[400vh] relative bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Image Layers */}
        <div className="absolute inset-0 z-0">
          {sections.map((section, i) => (
            <Motion.div
              key={i}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${section.image})`,
                y: imageTransforms[i],
                zIndex: i,
              }}
            />
          ))}
        </div>

        {/* Text Section */}
        <div className="absolute top-[35%] left-[6vw] z-50 w-[90%] text-white pointer-events-none">
          <div className="relative h-[160px] overflow-hidden">
            <AnimatePresence mode="wait">
              <Motion.div
                key={sections[activeIndex].title}
                initial={{ y: direction === "up" ? 100 : -100 }}
                animate={{ y: 0 }}
                exit={{ y: direction === "up" ? -100 : 100 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute"
              >
                <h1 className="text-7xl font-bold uppercase">
                  {sections[activeIndex].title}
                </h1>
                <p className="text-2xl mt-3">
                  {sections[activeIndex].subtitle}
                </p>
              </Motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
