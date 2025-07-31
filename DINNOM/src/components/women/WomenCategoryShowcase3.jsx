import React from "react";
import { useNavigate } from "react-router-dom";
import imgLeft from "../../assets/women/images/hoodies-left.jpeg";
import imgLabel from "../../assets/women/images/sweatshirt.png";

const WomenCategoryShowcase3 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/women/hoodies");
  };

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Desktop View */}
      <div className="hidden lg:block relative w-full h-[680px]">
        {/* Left model image - full height */}
        <div className="w-1/2 h-full absolute left-0 top-0">
          <img
            src={imgLeft}
            alt="Model wearing hoodies and jackets"
            className="w-full h-full object-cover object-left-top"
          />
        </div>

        {/* Title Text */}
        <div className="absolute top-[18%] right-[7%] text-right z-10">
          <h2 className="text-[5rem] leading-tight font-extrabold uppercase text-black tracking-tight">
            SWEATSHIRTS
          </h2>
          <h2 className="text-[5rem] leading-tight font-extrabold uppercase text-black tracking-tight -mt-2">
            & HOODIES
          </h2>
        </div>

        {/* Description + Button */}
<div className="absolute top-[64%] left-[60%] transform -translate-y-1/2 -translate-x-[5%] text-left z-10">
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Stay warm in style with our premium collection of <br />
            hoodies and sweatshirts. Crafted from high-quality <br />
            fabrics for exceptional comfort. Perfect for <br />
            layering or wearing solo in any casual setting.
          </p>

          <button
            onClick={handleClick}
            className="bg-black text-white px-8 py-3 rounded-full text-lg tracking-widest font-semibold hover:bg-gray-900 uppercase"
          >
            DISCOVER COLLECTION
          </button>
        </div>

        {/* Label */}
        <div className="absolute bottom-6 right-16 w-44">
          <img src={imgLabel} alt="Brand label" className="w-full object-cover" />
        </div>
      </div>

      {/* Mobile/Tablet View */}
      <div className="lg:hidden flex flex-col items-center text-center px-6 pt-10 pb-16 gap-6">
        <img
          src={imgLeft}
          alt="Model"
          className="w-full h-[400px] object-cover object-top"
        />

        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-black leading-tight">
            SWEATSHIRTS
          </h2>
          <h2 className="-mt-2 text-3xl sm:text-4xl font-extrabold uppercase text-black leading-tight">
            & HOODIES
          </h2>
        </div>

        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          Stay warm in style with our premium collection of <br />
          hoodies and sweatshirts. Crafted from high-quality <br />
          fabrics for exceptional comfort. Perfect for <br />
          layering or wearing solo in any casual setting.
        </p>

        <button
          onClick={handleClick}
          className="bg-black text-white px-6 py-3 text-sm sm:text-base rounded-full font-semibold tracking-wide uppercase hover:bg-gray-900 transition-all"
        >
          DISCOVER COLLECTION
        </button>

        <div className="w-36 mt-4">
          <img
            src={imgLabel}
            alt="Label"
            className="w-full object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default WomenCategoryShowcase3;
