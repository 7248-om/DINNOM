import React from "react";
import pantsImg from "../../assets/Women/images/pants.jpeg";
import skirtsImg from "../../assets/Women/images/skirts.png";
import shortsImg from "../../assets/Women/images/shorts.png";

const categories = [
  {
    title: "PANTS",
    description:
      "Tailored trousers, wide-leg fits, and relaxed joggers. Blending elegance with ease for every silhouette.",
    image: pantsImg,
  },
  {
    title: "SKIRTS",
    description:
      "From flowing midis to sleek minis — our skirts collection brings femininity to every outfit.",
    image: skirtsImg,
  },
  {
    title: "SHORTS",
    description:
      "Breezy, versatile, and perfect for warm days — explore our range of women’s shorts in timeless styles.",
    image: shortsImg,
  },
];

const WomenCategoryShowcase2 = () => {
  return (
    <div className="w-full bg-white px-8 md:px-16 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-start space-y-4">
            <img
              src={category.image}
              alt={`${category.title} image`}
              className="w-full h-72 object-cover rounded-2xl shadow-md"
            />
            <h3 className="text-3xl font-bold text-black">{category.title}</h3>
            <p className="text-gray-700 text-sm">{category.description}</p>
            <button className="bg-black text-white px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wide hover:bg-gray-900">
              Discover Collection
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenCategoryShowcase2;
