import React from "react";
import img1 from "../../assets/Women/images/img1.png"; // Main model image
import img2 from "../../assets/Women/images/img2.png";  // Label image

const WomenCategoryShowcase1 = () => {
  return (
    <div className="relative w-full h-[680px] bg-white overflow-hidden">
      {/* Left model image */}
      <div className="w-1/2 h-full absolute left-0 top-0 z-0">
        <img
          src={img1}
          alt="Female Model"
          className="w-full h-full object-cover object-left-top"
          style={{ imageRendering: 'auto' }}
        />
      </div>

      {/* Right Heading */}
      <div className="absolute top-[18%] right-[6%] text-right z-10">
        <h2 className="text-[4.5rem] leading-tight font-extrabold uppercase text-black tracking-tight">
          TOP, SHIRTS
        </h2>
        <h2 className="text-[4.5rem] leading-tight font-extrabold uppercase text-black tracking-tight -mt-2">
          & TEES
        </h2>
      </div>

      {/* Description + Button */}
      <div className="absolute top-[48%] right-[6%] text-left z-10 max-w-lg">
        <p className="text-gray-700 text-md">
          Unveil your everyday elegance with our handpicked collection of stylish tops, versatile shirts, and comfy tees — perfect for everything from brunch to boardroom.
        </p>

        <button className="mt-6 px-8 py-3 bg-black text-white text-sm tracking-wide font-semibold uppercase rounded-full hover:bg-gray-900 transition-all">
          EXPLORE COLLECTION
        </button>
      </div>

      {/* Bottom right label image */}
      <div className="absolute bottom-6 right-16 w-44 md:w-64 z-0">
        <img
          src={img2}
          alt="Label"
          className="w-full object-cover object-center rounded"
          style={{ imageRendering: 'auto' }}
        />
      </div>
    </div>
  );
};

export default WomenCategoryShowcase1;
