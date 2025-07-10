import React from "react";
import img11 from "../../assets/Men/images/img11.png";

const MenCategoryShowcase5 = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src={img11}
          alt="Caps and accessories collection"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Text overlay container */}
      <div className="relative z-10 h-full p-8 md:p-12 lg:p-16">
        {/* Top bar with description left and button right */}
        <div className="flex justify-between items-start">
          {/* Description - Top left */}
          <p className="text-black text-sm md:text-base max-w-[400px] font-medium">
            Completing our look with our collection of premium accessories featuring clean designs and quality materials.
          </p>
          
          {/* Button - Top right */}
          <button className="bg-black text-white px-6 py-2 md:px-8 md:py-3 rounded-full text-xs md:text-sm tracking-widest font-semibold uppercase hover:bg-gray-800 transition-colors">
            DISCOVER COLLECTION
          </button>
        </div>

        {/* Centered title */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-5xl md:text-5xl font-extrabold uppercase text-black tracking-tight">
            CAPS & ACCESSORIES
          </h1>
        </div>

        {/* Bottom right metadata (optional) */}
        <div className="absolute bottom-8 right-8 text-black text-xs space-x-4">
          <span>Search</span>
          <span>ENG</span>
          <span>US</span>
          <span>10-07-2025</span>
        </div>
      </div>
    </div>
  );
};

export default MenCategoryShowcase5;