import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/women/images/caps-accessories-bg.png"; // Replace with your actual image path

const WomenCategoryShowcase6 = () => {
  const navigate = useNavigate();  // <-- initialize navigate

  const handleClick = () => {
    navigate("/women/capsaccessories");  // <-- navigate to footwear page
  };

  return (
    <div className="relative w-full h-screen">
      {/* Full-screen background image */}
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Women caps and accessories collection"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Text overlay container */}
      <div className="relative z-10 h-full p-8 md:p-12 lg:p-16">
        {/* Top bar with description left and button right */}
        <div className="flex justify-between items-start">
          {/* Description - Top left */}
          <p className="text-black text-xl max-w-[500px] font-medium leading-relaxed">

            Completing our look with our collection of premium accessories featuring clean designs and quality materials.
          </p>
          
          {/* Button - Top right */}
          <button onClick={handleClick} className="bg-black text-white px-8 py-3 md:px-8 md:py-3 rounded-full text-xs md:text-lg tracking-widest font-semibold uppercase hover:bg-gray-800 transition-colors">
            DISCOVER COLLECTION
          </button>
        </div>

        {/* Centered title */}
        <div className="absolute top-[26%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-7xl font-extrabold uppercase text-black tracking-tight">
            CAPS & ACCESSORIES
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WomenCategoryShowcase6;
