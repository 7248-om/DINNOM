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
    <div className="w-full bg-white px-8 md:px-16 py-0">
      <div className="flex flex-col md:flex-row items-end justify-between gap-0">
        {/* Left Section */}
        <div className="flex-1 space-y-4 order-2 md:order-1 pb-0">
          <h2 className="text-6xl font-extrabold text-black leading-tight">DRESSES</h2>
          <p className="text-gray-700 max-w-md">
            Elegant and versatile, our dress collection ranges from casual daywear to sophisticated evening styles. Designed to flatter every figure and occasion.
          </p>
          <button
            onClick={handleClick}
            className="bg-black text-white px-6 py-3 font-semibold rounded-full uppercase tracking-wide text-sm hover:bg-gray-900 mb-4"
          >
            Discover Collection
          </button>
          <img
            src={imgLeft}
            alt="Women's dresses model left"
            className="w-[240px] md:w-[280px] object-cover -ml-2"
          />
        </div>

        {/* Right Image */}
        <div className="flex-1 order-1 md:order-2 self-stretch flex items-end">
          <img
            src={imgRight}
            alt="Women's dresses model right"
            className="w-full h-auto max-h-[600px] object-cover object-bottom -mr-2"
          />
        </div>
      </div>
    </div>
  );
};

export default WomenCategoryShowcase4;
