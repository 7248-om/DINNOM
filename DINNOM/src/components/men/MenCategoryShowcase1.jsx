import React from "react";
import { useNavigate } from "react-router-dom";
import img3 from "../../assets/Men/images/img3.webp";
import img4 from "../../assets/Men/images/img4.png";

const MenCategoryShowcase1 = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* MOBILE Layout */}
      <div className="flex flex-col items-center text-center lg:hidden w-full">
        {/* Image on Top */}
        <img
          src={img3}
          alt="Model"
          className="w-full h-[400px] object-cover object-top"
          style={{ imageRendering: "auto" }}
        />

        {/* Text Section */}
        <div className="px-6 py-8 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-black leading-tight">
            SHIRTS, T-SHIRTS
          </h2>
          <h2 className="-mt-2 text-3xl sm:text-4xl font-extrabold uppercase text-black leading-tight">
            & POLO SHIRTS
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto">
            Discover our timeless collection of premium shirts, casual T-shirts,
            and essential polos tailored for modern men. Minimalist styles designed
            for all-day comfort and elevated looks.
          </p>
          <button
            className="mt-4 px-6 py-3 bg-black text-white text-sm sm:text-base tracking-wide font-semibold uppercase rounded-full hover:bg-gray-900 transition-all"
            onClick={() => navigate("/men/shirts")}
          >
            DISCOVER COLLECTION
          </button>

          {/* Small label image */}
          <div className="w-36 mt-6 mx-auto">
            <img
              src={img4}
              alt="Label"
              className="w-full object-cover rounded"
              style={{ imageRendering: "auto" }}
            />
          </div>
        </div>
      </div>

      {/* DESKTOP Layout */}
      <div className="hidden lg:block relative w-full h-[780px] bg-white">
        {/* Left model image */}
        <div className="w-1/2 h-full absolute left-0 top-0 z-0">
          <img
            src={img3}
            alt="Model"
            className="w-full h-full object-cover object-left-top"
            style={{ imageRendering: "auto" }}
          />
        </div>

        {/* Title */}
        <div className="absolute top-[20%] right-[6%] text-right z-10">
          <h2 className="text-[4rem] xl:text-[5rem] leading-tight font-extrabold uppercase text-black tracking-tight">
            SHIRTS, T-SHIRTS
          </h2>
          <h2 className="text-[4rem] xl:text-[5rem] leading-tight font-extrabold uppercase text-black tracking-tight -mt-2">
            & POLO SHIRTS
          </h2>
        </div>

        {/* Description and Button */}
        <div className="absolute top-[54%] right-[6%] text-left z-10 max-w-lg">
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

        {/* Label image */}
        <div className="absolute bottom-6 right-16 w-44 md:w-64 z-0">
          <img
            src={img4}
            alt="Label"
            className="w-full object-cover object-center rounded"
            style={{ imageRendering: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MenCategoryShowcase1;
