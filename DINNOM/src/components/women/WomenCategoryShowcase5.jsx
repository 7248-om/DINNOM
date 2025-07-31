import React from "react";
import { useNavigate } from "react-router-dom";
import imgLeft from "../../assets/women/images/footwear-left.png";
import imgLabel from "../../assets/women/images/footwear-right.png";

const WomenCategoryShowcase5 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/women/footwear");
  };

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Desktop layout */}
      <div className="hidden lg:block relative w-full h-[680px]">
        {/* Left model image */}
        <div className="w-1/2 h-full absolute left-0 top-0">
          <img
            src={imgLeft}
            alt="Model showcasing women's footwear"
            className="w-full h-full object-cover object-left-top"
          />
        </div>

        {/* Text titles */}
        <div className="absolute top-[18%] right-[6%] text-right z-10">
          <h2 className="text-[5rem] leading-tight font-extrabold uppercase text-black tracking-tight">
            WOMEN'S
          </h2>
          <h2 className="text-[5rem] leading-tight font-extrabold uppercase text-black tracking-tight -mt-2">
            FOOTWEAR
          </h2>
        </div>

        {/* Description and Button */}
        <div className="absolute top-[48%] right-[6%] text-left z-10 max-w-lg">
          <p className="text-gray-700 text-lg -mt-3">
            Step out in style with our curated collection of women’s footwear. Designed for comfort, versatility, and to complement every outfit. From casual sneakers to elegant heels, find your perfect pair.
          </p>

          <button
            className="mt-6 px-8 py-3 bg-black text-white text-lg tracking-wide font-semibold uppercase rounded-full hover:bg-gray-900 transition-all block"
            onClick={handleClick}
          >
            DISCOVER COLLECTION
          </button>
        </div>

        {/* Bottom right label */}
        <div className="absolute bottom-0 right-16 w-[240px] h-[280px]">
          <img
            src={imgLabel}
            alt="Brand label"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mobile and tablet layout */}
      <div className="lg:hidden flex flex-col items-center text-center px-6 pt-10 pb-16 gap-6">
        <img
          src={imgLeft}
          alt="Model"
          className="w-full h-[400px] object-cover object-top"
        />

        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-black leading-tight">
            WOMEN'S
          </h2>
          <h2 className="-mt-2 text-3xl sm:text-4xl font-extrabold uppercase text-black leading-tight">
            FOOTWEAR
          </h2>
        </div>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Step out in style with our curated collection of women’s footwear. Designed for comfort, versatility, and to complement every outfit. From casual sneakers to elegant heels, find your perfect pair.
        </p>

        <button
          onClick={handleClick}
          className="bg-black text-white px-6 py-3 text-sm sm:text-base rounded-full font-semibold tracking-wide uppercase hover:bg-gray-900 transition-all"
        >
          DISCOVER COLLECTION
        </button>

        <div className="w-36 sm:w-44 mt-4">
          <img
            src={imgLabel}
            alt="Brand label"
            className="w-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default WomenCategoryShowcase5;
