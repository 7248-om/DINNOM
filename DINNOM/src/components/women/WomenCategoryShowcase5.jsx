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

      {/* Right content section */}
      <div className="absolute top-1/2 right-[6%] transform -translate-y-1/2 max-w-lg">
        {/* Heading */}
        <h2 className="text-6xl font-extrabold uppercase text-black mb-6 leading-tight">
          WOMEN'S<br />
          FOOTWEAR
        </h2>

        {/* Description */}
        <p className="text-gray-700 mb-8 text-sm leading-relaxed">
          Step out in style with our curated collection of women’s footwear.<br />
          Designed for comfort, versatility, and to complement every outfit.<br />
          From casual sneakers to elegant heels, find your perfect pair.
        </p>

        {/* Button */}
        <button
          onClick={handleClick}  // <-- add click handler here
          className="bg-black text-white px-8 py-3 rounded-full text-xs tracking-widest font-semibold hover:bg-gray-900 uppercase"
        >
          DISCOVER COLLECTION
        </button>
      </div>

      {/* Bottom right label */}
      <div className="absolute bottom-6 right-16 w-44">
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
