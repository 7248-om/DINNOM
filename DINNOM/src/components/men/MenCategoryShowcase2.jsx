import React from "react";
import { useNavigate } from "react-router-dom";
import imgRight from "../../assets/Men/images/img6.png";
import imgLeft from "../../assets/Men/images/img5.png";

const MenCategoryShowcase2 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white px-8 md:px-16 py-0">
      <div className="flex flex-col md:flex-row items-end justify-between gap-0">
        {/* Left Section */}
        <div className="flex-1 space-y-4 order-2 md:order-1 pb-0">
          <h2 className="text-6xl font-extrabold text-black leading-tight">PANTS</h2>
          <p className="text-gray-700 max-w-md">
            Discover our premium range of men's trousers and pants. Crafted for comfort, style, and everyday wear. Modern silhouettes meet timeless cuts.
          </p>
          <button
            onClick={() => navigate("/men-pants-shorts")}
            className="bg-black text-white px-6 py-3 font-semibold rounded-full uppercase tracking-wide text-sm hover:bg-gray-900 mb-4"
          >
            Discover Collection
          </button>
          <img
            src={imgLeft}
            alt="Pants model left"
            className="w-[240px] md:w-[280px] object-cover -ml-2"
          />
        </div>

        {/* Right Image */}
        <div className="flex-1 order-1 md:order-2 self-stretch flex items-end">
          <img
            src={imgRight}
            alt="Pants model right"
            className="w-full h-auto max-h-[600px] object-cover object-bottom -mr-2"
          />
        </div>
      </div>
    </div>
  );
};

export default MenCategoryShowcase2;
