import React from "react";
import { useNavigate } from "react-router-dom";
import imgRight from "../../assets/Men/images/img6.png";
import imgLeft from "../../assets/Men/images/img5.png";

const MenCategoryShowcase2 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white px-8 md:px-16 pt-12 pb-0 -mt-12">
      <div className="flex flex-col md:flex-row items-end justify-between gap-0">
        {/* Left Section */}
        <div className="flex-1 order-2 md:order-1 pb-0 space-y-4 relative" style={{ top: "-30px" }}>

          {/* Heading */}
          <div>
            <h2 className="text-[5rem] font-extrabold text-black leading-tight">PANTS</h2>
          </div>

          {/* Description + Button + Image */}
          <div className="space-y-4">
            <p className="text-gray-700 max-w-md text-lg">
              Discover our premium range of men's trousers and pants. Crafted for comfort, style, and everyday wear. Modern silhouettes meet timeless cuts.
            </p>

            <button
              onClick={() => navigate("/men/pants")}
          className="bg-black text-white px-8 py-3 rounded-full text-lg tracking-widest font-semibold hover:bg-gray-900 uppercase"
            >
              Discover Collection
            </button>

            <img
              src={imgLeft}
              alt="Pants model left"
              className="w-[240px] md:w-[280px] object-cover -ml-2"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 order-1 md:order-2 self-stretch flex items-end">
          <img
            src={imgRight}
            alt="Pants model right"
            className="w-full h-auto max-h-[700px] object-cover object-bottom -mr-2"
          />
        </div>
      </div>
    </div>
  );
};

export default MenCategoryShowcase2;
