import React from "react";
import { useNavigate } from "react-router-dom";
import pantsImg from "../../assets/women/images/pants.jpeg"; // Main image shown once

const categories = [
  {
    title: "PANTS",
    description:
      "Tailored trousers, wide-leg fits, and relaxed joggers. Blending elegance with ease for every silhouette.",
  },
  {
    title: "SKIRTS",
    description:
      "From flowing midis to sleek minis — our skirts collection brings femininity to every outfit.",
  },
  {
    title: "SHORTS",
    description:
      "Breezy, versatile, and perfect for warm days — explore our range of women’s shorts in timeless styles.",
  },
];

const WomenCategoryShowcase2 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/women/pants");
  };

  return (
    <div className="w-full bg-white px-8 md:px-16 py-16">
      {/* Show single big image */}
      <div className="mb-12">
        <img
          src={pantsImg}
          alt="Women category main"
          className="w-full h-96 object-cover rounded-2xl shadow-md"
        />
      </div>

      {/* Show categories list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-start space-y-4">
            <h3 className="text-3xl font-bold text-black">{category.title}</h3>
            <p className="text-gray-700 text-sm">{category.description}</p>
          </div>
        ))}
      </div>

      {/* Single Discover Collection button */}
      <div className="flex justify-center">
        <button 
        onClick={handleClick}
        className="bg-black text-white px-10 py-3 rounded-full text-sm font-semibold uppercase tracking-wide hover:bg-gray-900">
          Discover Collection
        </button>
      </div>
    </div>
  );
};

export default WomenCategoryShowcase2;
