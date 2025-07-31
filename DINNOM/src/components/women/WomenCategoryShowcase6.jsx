import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/women/images/caps-accessories-bg.png";

const WomenCategoryShowcase6 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/women/capsaccessories");
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Women caps and accessories collection"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-start md:justify-between px-6 md:px-16 pt-10 md:pt-16">
        {/* Title - stacked on small, absolute on md+ */}
        <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold uppercase text-black tracking-tight 
                      text-center md:text-center md:absolute md:left-1/2 md:top-[26%] md:transform md:-translate-x-1/2 md:-translate-y-1/2">
          CAPS & ACCESSORIES
        </h1>

        {/* Description and Button */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-10 md:mt-0 gap-4 md:gap-0">
          <p className="text-black text-center md:text-left text-base md:text-xl max-w-[500px] font-medium leading-relaxed">
            Completing our look with our collection of premium accessories featuring clean designs and quality materials.
          </p>

          <button
            onClick={handleClick}
            className="bg-black text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-lg tracking-widest font-semibold uppercase hover:bg-gray-800 transition-colors"
          >
            DISCOVER COLLECTION
          </button>
        </div>
      </div>
    </div>
  );
};

export default WomenCategoryShowcase6;
