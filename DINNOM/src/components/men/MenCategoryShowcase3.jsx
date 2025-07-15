import React from "react";
import { useNavigate } from "react-router-dom";
import img7 from "../../assets/Men/images/img7.png";
import img8 from "../../assets/Men/images/img8.png";

const MenCategoryShowcase3 = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[680px] bg-white overflow-hidden">
      {/* Left model image - full height */}
      <div className="w-1/2 h-full absolute left-0 top-0">
        <img
          src={img7}
          alt="Model wearing hoodie"
          className="w-full h-full object-cover object-left-top"
        />
      </div>

      {/* Right content section */}
      <div className="absolute top-1/2 right-[3%] transform -translate-y-1/2">
        {/* Three-line heading */}
        <h2 className="text-6xl font-extrabold uppercase text-black mb-6 leading-tight">
          HOODIES,<br />
          SWEATSHIRTS<br />
          & SWEATERS
        </h2>

        {/* Exactly three-line description */}
        <p className="text-gray-700 mb-8 text-sm leading-relaxed">
          Stay warm in style with our premium collection of hoodies, sweatshirts and sweaters.<br />
          Crafted from high-quality fabrics for exceptional comfort.<br />
          Perfect for layering or wearing solo in any casual setting.
        </p>

        {/* Rounded button */}
        <button
          onClick={() => navigate("/men/sweatshirts")}
          className="bg-black text-white px-8 py-3 rounded-full text-xs tracking-widest font-semibold hover:bg-gray-900 uppercase"
        >
          DISCOVER COLLECTION
        </button>
      </div>

      {/* Bottom right label - sharp corners */}
      <div className="absolute bottom-6 right-16 w-44">
        <img
          src={img8}
          alt="Brand label"
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default MenCategoryShowcase3;
