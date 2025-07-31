import React from "react";
import { useNavigate } from "react-router-dom";
import img11 from "../../assets/Men/images/img11.png";

const MenCategoryShowcase5 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={img11}
          alt="Caps and accessories collection"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="relative z-10 h-full p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between">
        {/* Top section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-0">
          {/* Description */}
          <p className="text-black text-base sm:text-lg md:text-xl max-w-xl text-center md:text-left font-medium leading-relaxed">
            Completing our look with our collection of premium accessories featuring clean designs and quality materials.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/men/accessories")}
            className="bg-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base md:text-lg tracking-wide md:tracking-widest font-semibold uppercase hover:bg-gray-800 transition-colors"
          >
            DISCOVER COLLECTION
          </button>
        </div>

        {/* Centered title */}
        <div className="absolute top-[26%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase text-black tracking-tight">
            CAPS
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MenCategoryShowcase5;
