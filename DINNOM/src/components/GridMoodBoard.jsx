// components/GridMoodBoard.jsx
import React, { useRef } from 'react';
import { motion as Motion, useScroll, useTransform } from 'framer-motion';
import modelImg from '../assets/videos/model.jpg';
import fabricImg from '../assets/videos/fabric.jpg';
import graffitiImg from '../assets/videos/graffiti.jpg';
import brandImg from '../assets/videos/brand.jpg';
import ShinyText from './ShinyText';
const gridItems = [
  {
    img: modelImg,
    caption: 'RAW PRESENCE',
    floatRange: [40, -40],
    hoverRotate: 2,
  },
  {
    img: fabricImg,
    caption: 'FABRIC TRUTH',
    floatRange: [30, -30],
    hoverRotate: -2,
  },
  {
    img: graffitiImg,
    caption: 'SPEAK STREET',
    floatRange: [50, -50],
    hoverRotate: 2,
  },
  {
    img: brandImg,
    caption: 'LABELLED',
    floatRange: [20, -20],
    hoverRotate: -2,
  },
];

const GridItem = ({ item, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], item.floatRange);

  return (
    <Motion.div
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.6 }}
      className="overflow-hidden rounded-lg shadow-xl group"
    >
      <Motion.img
        src={item.img}
        alt={item.caption}
        className="w-full h-full object-cover rounded-lg"
        whileHover={{ scale: 1.05, rotate: item.hoverRotate }}
        transition={{ duration: 0.5 }}
      />
      <Motion.div
        initial={{ y: 30, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100"
      >
        <p className="text-white text-sm md:text-base font-medium tracking-widest text-center px-4">
          {item.caption}
        </p>
      </Motion.div>
    </Motion.div>
  );
};

const GridMoodBoard = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-12">
      <h2 className="text-white text-3xl md:text-4xl font-light mb-12 tracking-wider uppercase text-center">
<ShinyText text="Fragments!" speed={3} className="text-2xl font-bold" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {gridItems.map((item, idx) => (
          <GridItem key={idx} item={item} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default GridMoodBoard;
