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
    <div className="w-full bg-white px-4 sm:px-6 md:px-16 pt-10 md:pt-12 pb-0 -mt-8 md:-mt-12">
      <div className="flex flex-col md:flex-row items-end md:items-stretch justify-between gap-8 md:gap-0">

        {/* Left Section */}
<div className="flex-1 order-2 md:order-1 space-y-4 mt-4 md:mt-12 flex flex-col items-center md:items-start text-center md:text-left">
          {/* Heading */}
          <h2 className="text-[2.5rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[5rem] font-extrabold text-black leading-tight">
            DRESSES
          </h2>

          {/* Description + Button + Image */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <p className="text-gray-700 max-w-md text-base sm:text-lg md:text-lg lg:text-xl">
              Elegant and versatile, our dress collection ranges from casual daywear to
              sophisticated evening styles. Designed to flatter every figure and occasion.
            </p>

            <button
              onClick={handleClick}
              className="bg-black text-white px-6 sm:px-8 py-3 text-sm sm:text-base md:text-lg rounded-full tracking-wide md:tracking-widest font-semibold hover:bg-gray-900 uppercase"
            >
              Discover Collection
            </button>

            <img
              src={imgLeft}
              alt="Dresses model left"
              className="w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] object-cover -ml-0 md:ml-0 max-h-[300px]"
            />

          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 order-1 md:order-2 self-stretch flex items-end justify-center md:justify-end">
          <img
            src={imgRight}
            alt="Dresses model right"
            className="w-full h-auto max-h-[480px] sm:max-h-[580px] md:max-h-[650px] lg:max-h-[700px] object-cover object-bottom"
          />
        </div>
      </div>
    </div>
  );
};

export default WomenCategoryShowcase4;
