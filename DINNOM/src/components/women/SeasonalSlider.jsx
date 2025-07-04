import React, { useState, useEffect } from "react";

// Import images from src/assets
import ws1 from "../assets/Women/seasonal/ws1.webp";
import ws2 from "../assets/Women/seasonal/ws2.jpg";
import ws3 from "../assets/Women/seasonal/ws3.jpg";
import ws4 from "../assets/Women/seasonal/ws4.jpg";
import ws5 from "../assets/Women/seasonal/ws5.jpg";
const slides = [
  {
    image: ws1,
    title: "EDGY ESSENTIALS",
    subtitle: "DECONSTRUCTED COOL",
    tagline: "REDEFINE REBELLION.",
  },
  {
    image: ws2,
    title: "POWER PLAY",
    subtitle: "THE UNBUTTONED BLAZER",
    tagline: "CONFIDENCE IN EVERY STITCH.",
  },
  {
    image: ws3, 
    title: "ART IN MOTION",
    subtitle: "THE LAYERED TRANSFORMATION",
    tagline: "DRESS BEYOND CONVENTION.",
  },
  {
    image: ws4,
    title: "SHARP SILHOUETTE",
    subtitle:  "THE TAILORED STATEMENT",
    tagline: "ELEGANCE ON THE MOVE.",
  },
  {
    image: ws5, 
    title: "SIMPLY CHIC",
    subtitle:  "THE EFFORTLESS DRAPE",
    tagline: "ELEGANCE IN EVERYDAY.",
  },
];

const SeasonalSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full mt-10 text-center">
      <h2 className="text-3xl font-bold mb-6 tracking-widest">SEASONAL</h2>

      <div className="relative w-full h-[70vh] max-w-[1200px] mx-auto overflow-hidden rounded-2xl">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl z-10 hover:scale-110 transition"
        >
          &#10094;
        </button>

        {/* Slide */}
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          <div className="absolute bottom-6 left-6 bg-black/60 text-white p-4 rounded-lg max-w-[90%] text-left">
            <p className="text-sm tracking-wide">{slides[current].title}</p>
            <h2 className="text-xl font-bold">{slides[current].subtitle}</h2>
            <p className="text-sm italic text-gray-300">{slides[current].tagline}</p>
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl z-10 hover:scale-110 transition"
        >
          &#10095;
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default SeasonalSlider;
