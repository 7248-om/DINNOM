import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/women/images/img1.png";
import img2 from "../../assets/women/images/img2.png";

const WomenCategoryShowcase1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/women/tops");
  };

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* MOBILE LAYOUT */}
      <div className="flex flex-col lg:hidden items-center text-center px-6 py-10 space-y-6">
        <img
          src={img1}
          alt="Female Model"
          className="w-full h-[400px] object-cover object-top"
          style={{ imageRendering: "auto" }}
        />

        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-black leading-tight">
            TOP, SHIRTS
          </h2>
          <h2 className="-mt-2 text-3xl sm:text-4xl font-extrabold uppercase text-black leading-tight">
            & TEES
          </h2>
        </div>

        <p className="text-gray-700 text-base sm:text-lg max-w-md">
          Unveil your everyday elegance with our handpicked collection of stylish tops, versatile shirts, and comfy tees — perfect for everything from brunch to boardroom.
        </p>

        <button
          className="mt-2 px-6 py-3 bg-black text-white text-sm sm:text-base tracking-wide font-semibold uppercase rounded-full hover:bg-gray-900 transition-all"
          onClick={handleClick}
        >
          DISCOVER COLLECTION
        </button>

        <div className="w-36 mt-6">
          <img
            src={img2}
            alt="Label"
            className="w-full object-cover rounded"
            style={{ imageRendering: "auto" }}
          />
        </div>
      </div>

      {/* DESKTOP LAYOUT */}
      <div className="hidden lg:block relative w-full h-[680px] bg-white">
        {/* Left model image */}
        <div className="w-1/2 h-full absolute left-0 top-0 z-0">
          <img
            src={img1}
            alt="Female Model"
            className="w-full h-full object-cover object-left-top"
            style={{ imageRendering: "auto" }}
          />
        </div>

        {/* Right Text Section */}
        <div className="absolute top-[18%] right-[6%] text-right z-10">
          <h2 className="text-[5rem] leading-tight font-extrabold uppercase text-black tracking-tight">
            TOP, SHIRTS
          </h2>
          <h2 className="text-[5rem] leading-tight font-extrabold uppercase text-black tracking-tight -mt-2">
            & TEES
          </h2>
        </div>

        {/* Description and Button */}
        <div className="absolute top-[45%] right-[8%] text-left z-10 max-w-lg">
          <p className="text-gray-700 text-lg">
            Unveil your everyday elegance with our handpicked collection of stylish tops, versatile shirts, and comfy tees — perfect for everything from brunch to boardroom.
          </p>

          <button
            className="mt-6 px-8 py-3 bg-black text-white text-lg tracking-wide font-semibold uppercase rounded-full hover:bg-gray-900 transition-all"
            onClick={handleClick}
          >
            DISCOVER COLLECTION
          </button>
        </div>

        {/* Bottom right label image */}
        <div className="absolute bottom-6 right-16 w-44 md:w-64 z-0">
          <img
            src={img2}
            alt="Label"
            className="w-full object-cover object-center rounded"
            style={{ imageRendering: "auto" }}
          />
        </div>
      </div>
    </div>
  );
};

export default WomenCategoryShowcase1;
