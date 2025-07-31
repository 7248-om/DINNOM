import React from "react";
import { useNavigate } from "react-router-dom";
import img7 from "../../assets/Men/images/img7.png";
import img8 from "../../assets/Men/images/img8.png";

const MenCategoryShowcase3 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full bg-white overflow-hidden flex flex-col lg:block lg:min-h-[680px]">
      {/* Left model image */}
      <div className="w-full lg:w-1/2 h-[400px] sm:h-[500px] lg:h-full lg:absolute lg:left-0 lg:top-0">
        <img
          src={img7}
          alt="Model wearing hoodie"
          className="w-full h-full object-cover object-left-top"
        />
      </div>

      {/* Heading */}
      <div className="relative mt-6 px-6 lg:absolute lg:top-[18%] lg:right-[7%] lg:text-right text-center z-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-tight font-extrabold uppercase text-black tracking-tight">
          SWEATSHIRTS
        </h2>
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-tight font-extrabold uppercase text-black tracking-tight -mt-2">
          & HOODIES
        </h2>
      </div>

      {/* Description and Button */}
      <div className="relative mt-8 px-6 text-center lg:absolute lg:top-[64%] lg:left-[60%] lg:transform lg:-translate-x-[10%] lg:-translate-y-1/2 lg:text-left">
        <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
          Stay warm in style with our premium collection of <br className="hidden sm:inline" />
          hoodies and sweatshirts. Crafted from high-quality <br className="hidden sm:inline" />
          fabrics for exceptional comfort. Perfect for <br className="hidden sm:inline" />
          layering or wearing solo in any casual setting.
        </p>

        <button
          onClick={() => navigate("/men/sweatshirts")}
          className="bg-black text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg tracking-widest font-semibold hover:bg-gray-900 uppercase"
        >
          DISCOVER COLLECTION
        </button>
      </div>

      {/* Bottom right label */}
      <div className="relative mt-6 mb-6 px-6 flex justify-center lg:absolute lg:bottom-6 lg:right-16 lg:w-44">
        <img
          src={img8}
          alt="Brand label"
          className="w-32 sm:w-44 object-cover"
        />
      </div>
    </div>
  );
};

export default MenCategoryShowcase3;
