import React from "react";
import { useNavigate } from "react-router-dom";  // <-- import this
import imgLeft from "../../assets/women/images/footwear-left.png";  // Model image on left
import imgLabel from "../../assets/women/images/brand-label.png";   // Bottom right label image

const WomenCategoryShowcase5 = () => {
  const navigate = useNavigate();  // <-- initialize navigate

  const handleClick = () => {
    navigate("/women/footwear");  // <-- navigate to footwear page
  };

  return (
    <div className="relative w-full h-[680px] bg-white overflow-hidden">
      {/* Left model image - full height */}
      <div className="w-1/2 h-full absolute left-0 top-0">
        <img
          src={imgLeft}
          alt="Model showcasing women's footwear"
          className="w-full h-full object-cover object-left-top"
        />
      </div>

      {/* Right Text Section */}
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
        <p className="text-gray-700 text-lg text-left -mt-3">
          Step out in style with our curated collection of women’s footwear. Designed for comfort, versatility, and to complement every outfit. From casual sneakers to elegant heels, find your perfect pair.
        </p>

        <button
  className="mt-6 px-8 py-3 bg-black text-white text-lg tracking-wide font-semibold uppercase rounded-full hover:bg-gray-900 transition-all block translate-x-0"
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
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default WomenCategoryShowcase5;
