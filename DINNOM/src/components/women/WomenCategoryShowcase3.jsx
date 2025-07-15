import React from "react";
import { useNavigate } from "react-router-dom";
import imgLeft from "../../assets/women/images/hoodies-left.jpeg";  // Model image on left
import imgLabel from "../../assets/women/images/brand-label.png";  // Bottom right label image

const WomenCategoryShowcase3 = () => {
 const navigate = useNavigate();

  const handleClick = () => {
    navigate("/women/hoodies");
  };
  return (
    <div className="relative w-full h-[680px] bg-white overflow-hidden">
      {/* Left model image - full height */}
      <div className="w-1/2 h-full absolute left-0 top-0">
        <img
          src={imgLeft}
          alt="Model wearing hoodies and jackets"
          className="w-full h-full object-cover object-left-top"
        />
      </div>

      {/* Right content section */}
      <div className="absolute top-1/2 right-[6%] transform -translate-y-1/2 max-w-lg">
        {/* Three-line heading */}
        <h2 className="text-6xl font-extrabold uppercase text-black mb-6 leading-tight">
          HOODIES,<br />
          SWEATSHIRTS<br />
          & SWEATERS & JACKETS
        </h2>

        {/* Exactly three-line description */}
        <p className="text-gray-700 mb-8 text-sm leading-relaxed">
          Layer up in style with our cozy collection of hoodies, sweatshirts, sweaters, and jackets.<br />
          Designed for comfort and versatility, perfect for any season.<br />
          From casual warmth to chic outerwear, find your ideal fit.
        </p>

        {/* Rounded button */}
        <button 
        onClick={handleClick}
        className="bg-black text-white px-8 py-3 rounded-full text-xs tracking-widest font-semibold hover:bg-gray-900 uppercase">
          DISCOVER COLLECTION
        </button>
      </div>

      {/* Bottom right label - sharp corners */}
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

export default WomenCategoryShowcase3;
