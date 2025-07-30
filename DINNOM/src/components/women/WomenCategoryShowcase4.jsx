import React from "react";
import { useNavigate } from "react-router-dom";
import imgRight from "../../assets/women/images/dresses-right.png";
import imgLeft from "../../assets/women/images/dresses-left.png";

const WomenCategoryShowcase4 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/women/dresses");
  };

  return (
    <div className="w-full bg-white px-8 md:px-16 pt-12 pb-0 -mt-12">
      <div className="flex flex-col md:flex-row items-end justify-between gap-0">
        
        {/* Left Section */}
        <div className="flex-1 order-2 md:order-1 pb-0 space-y-4 relative -top-4">
          {/* Heading */}
          <div>
            <h2 className="text-6xl font-extrabold text-black leading-tight">DRESSES</h2>
          </div>

          {/* Description + Button + Image */}
          <div className="space-y-4">
            <p className="text-gray-700 max-w-md text-lg">
              Elegant and versatile, our dress collection ranges from casual daywear to sophisticated evening styles. Designed to flatter every figure and occasion.
            </p>

            <button 
              onClick={handleClick} 
              className="bg-black text-white px-8 py-4 text-lg font-semibold rounded-full uppercase tracking-wide hover:bg-gray-900 mb-4"
            >
              Discover Collection
            </button>

            <img
              src={imgLeft}
              alt="Dresses model left"
              className="w-[240px] max-h-[280px] md:w-[280px] object-cover -ml-2" 
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 order-1 md:order-2 self-stretch flex items-end">
          <img
            src={imgRight}
            alt="Dresses model right"
            className="w-full h-auto max-h-[700px] object-cover object-bottom -mr-2" 
          />
        </div>
      </div>
    </div>
  );
};

export default WomenCategoryShowcase4;
