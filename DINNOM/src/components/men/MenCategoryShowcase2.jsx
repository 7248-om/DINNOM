import React from "react";
import { useNavigate } from "react-router-dom";
import imgRight from "../../assets/Men/images/img6.png";
import imgLeft from "../../assets/Men/images/img5.png";

const MenCategoryShowcase2 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white px-4 sm:px-6 md:px-16 pt-10 md:pt-12 pb-0 -mt-8 md:-mt-12">
      <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 md:gap-0 text-center md:text-left">

        {/* Left Section */}
        <div
          className="flex-1 order-2 md:order-1 space-y-4 relative -top-2 md:-top-[30px] flex flex-col items-center md:items-start"
        >
          {/* Heading */}
          <div>
            <h2 className="text-[2.5rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[5rem] font-extrabold text-black leading-tight">
              PANTS
            </h2>
          </div>

          {/* Description + Button + Image */}
          <div className="space-y-4 max-w-md">
            <p className="text-gray-700 text-base sm:text-lg md:text-lg lg:text-xl">
              Discover our premium range of men's trousers and pants. Crafted for comfort, style, and everyday wear. Modern silhouettes meet timeless cuts.
            </p>

            <button
              onClick={() => navigate("/men/pants")}
              className="bg-black text-white px-6 sm:px-8 py-3 text-sm sm:text-base md:text-lg rounded-full tracking-wide md:tracking-widest font-semibold hover:bg-gray-900 uppercase"
            >
              Discover Collection
            </button>

            <div className="flex justify-center md:justify-start">
              <img
                src={imgLeft}
                alt="Pants model left"
                className="w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] object-cover -ml-0 md:-ml-2"
              />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 order-1 md:order-2 self-stretch flex items-center md:items-end justify-center md:justify-end">
                  <img
                    src={imgRight}
                    alt="Pants model right"
                    className="w-full max-w-md md:max-w-none h-auto max-h-[700px] object-cover object-bottom -mr-0 md:-mr-2"
                  />
        </div>

      </div>
    </div>
  );
};

export default MenCategoryShowcase2;
