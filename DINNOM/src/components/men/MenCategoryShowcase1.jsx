import React from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../../assets/Men/images/img3.webp";
import img4 from "../../assets/Men/images/img4.png";

const MenCategoryShowcase1 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[680px] bg-white overflow-hidden">
      {/* Left model image */}
      <div className="w-1/2 h-full absolute left-0 top-0 z-0">
        <img
          src={img3}
          alt="Model"
          className="w-full h-full object-cover object-left-top"
          style={{ imageRendering: 'auto' }}
        />
      </div>

      {/* Right Text Section */}
      <div className="absolute top-[18%] right-[6%] text-right z-10">
        <h2 className="text-[5rem] leading-tight font-extrabold uppercase text-black tracking-tight">
          SHIRTS, T-SHIRTS
        </h2>
        <h2 className="text-[5rem] leading-tight font-extrabold uppercase text-black tracking-tight -mt-2">
          & POLO SHIRTS
        </h2>
      </div>

      {/* Description and Button */}
      <div className="absolute top-[48%] right-[6%] text-left z-10 max-w-lg">
        <p className="text-gray-700 text-lg">
          Discover our timeless collection of premium shirts, casual T-shirts,
          and essential polos tailored for modern men. Minimalist styles
          designed for all-day comfort and elevated looks.
        </p>

        <button
          className="mt-6 px-8 py-3 bg-black text-white text-lg tracking-wide font-semibold uppercase rounded-full hover:bg-gray-900 transition-all"
          onClick={() => navigate("/men/shirts")}
        >
          DISCOVER COLLECTION
        </button>
      </div>

      {/* Bottom right label image */}
      <div className="absolute bottom-6 right-16 w-44 md:w-64 z-0">
        <img
          src={img4}
          alt="Label"
          className="w-full object-cover object-center rounded"
          style={{ imageRendering: 'auto' }}
        />
      </div>
    </div>
  );
};

export default MenCategoryShowcase1;
