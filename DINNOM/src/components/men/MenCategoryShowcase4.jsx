import React from "react";
import { useNavigate } from "react-router-dom";
import imgRight from "../../assets/Men/images/img9.png";
import imgLeft from "../../assets/Men/images/img10.png";

const MenCategoryShowcase4 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white px-8 md:px-16 pt-12 pb-0 -mt-12">
      <div className="flex flex-col md:flex-row items-end justify-between gap-0">
        
        {/* Left Section */}
        <div className="flex-1 order-2 md:order-1 pb-0 space-y-4 relative -top-4">
          {/* Heading */}
          <div>
            <h2 className="text-6xl font-extrabold text-black leading-tight">FOOTWEAR</h2>
          </div>

          {/* Description + Button + Image */}
          <div className="space-y-4">
            <p className="text-gray-700 max-w-md">
              Designed for comfort and durability, each pair is crafted to suit various occasions 
              and personal tastes. They are essential accessories that complete an outfit, 
              reflecting individuality and sophistication.
            </p>

            <button 
              onClick={() => navigate("/men/footwear")} 
              className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-full uppercase tracking-wide hover:bg-gray-900 mb-4"
            >
              Discover Collection
            </button>

            <img
              src={imgLeft}
              alt="Footwear model left"
              className="w-[240px] md:w-[280px] object-cover -ml-2" 
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 order-1 md:order-2 self-stretch flex items-end">
          <img
            src={imgRight}
            alt="Footwear model right"
            className="w-full h-auto max-h-[700px] object-cover object-bottom -mr-2" 
          />
        </div>
      </div>
    </div>
  );
};

export default MenCategoryShowcase4;