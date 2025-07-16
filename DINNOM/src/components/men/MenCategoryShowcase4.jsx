import React from "react";
import imgRight from "../../assets/Men/images/img9.png";
import imgLeft from "../../assets/Men/images/img10.png";

const MenCategoryShowcase4 = () => {
  return (
    <div className="w-full bg-white px-8 md:px-16 py-0"> {/* Removed vertical padding */}
      <div className="flex flex-col md:flex-row items-end justify-between gap-0"> {/* Removed gap */}
        {/* Left Section */}
        <div className="flex-1 space-y-4 order-2 md:order-1 pb-0"> {/* Reduced space-y and padding */}
          <h2 className="text-6xl font-extrabold text-black leading-tight">FOOTWEAR</h2>
          <p className="text-gray-700 max-w-md">
           Designed for comfort and durability, each pair is crafted to suit various occasions 
           and personal tastes. They are essential accessories that complete an outfit, 
           reflecting individuality and sophistication.
          </p>
          <button onClick={() => navigate("/men/footwear")} className="bg-black text-white px-6 py-3 font-semibold rounded-full uppercase tracking-wide text-sm hover:bg-gray-900 mb-4">
            Discover Collection
          </button>
          <img
            src={imgLeft}
            alt="Pants model left"
            className="w-[240px] md:w-[280px] object-cover -ml-2" 
            /* Negative margin to pull left */
          />
        </div>

        {/* Right Image */}
        <div className="flex-1 order-1 md:order-2 self-stretch flex items-end">
          <img
            src={imgRight}
            alt="Pants model right"
            className="w-full h-auto max-h-[600px] object-cover object-bottom -mr-2" 
            /* Negative margin to pull right */
          />
        </div>
      </div>
    </div>
  );
};

export default MenCategoryShowcase4;