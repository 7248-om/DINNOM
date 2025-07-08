import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const CategoriesExpand = ({products}) => {
  return (
    <div>
      <Navbar />
      <div className="px-6 py-12 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-[3/4] bg-gray-100 overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-gray-800 font-medium">{product.name}</p>
                <p className="text-sm text-gray-500 mt-1">₹{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CategoriesExpand;
