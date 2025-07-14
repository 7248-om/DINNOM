import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link

const CategoriesExpand = ({ products }) => {
  return (
    <div className="px-6 py-12 bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <HoverProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

const HoverProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/product/${product.id}`} 
      className="flex flex-col items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-full aspect-[3/4] bg-gray-100 overflow-hidden rounded-lg">
        <img
          src={isHovered ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
        />
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-800 font-medium">{product.name}</p>
        <p className="text-sm text-gray-500 mt-1">₹{product.price}</p>
      </div>
    </Link>
  );
};

export default CategoriesExpand;
