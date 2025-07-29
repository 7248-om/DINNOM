import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Minus, Plus } from "lucide-react";
import { motion as Motion, AnimatePresence } from "framer-motion";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:5050/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error('Failed to load product', err));
  }, [id]);

  const handleAddToCart = async () => {
  setError('');

  if (!selectedSize) {
    toast.error('Please select a size');
    return;
  }

  if (quantity > product.stock) {
    toast.error(`Only ${product.stock} items in stock`);
    return;
  }

  try {
    const token = localStorage.getItem('token');
    if (!token) {
      toast.error('You must be logged in to add items to the cart.');
      return;
    }

    await axios.post(
      'http://localhost:5050/api/cart',
      {
        productId: product._id,
        selectedSize,
        quantity,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      }
    );

    toast.success('🛒 Item added to cart!');
  } catch (err) {
    console.error(err);
    setError('Failed to add item to cart');
  }
};


  if (!product) return <div>Loading...</div>;

  const images = [product.mainImage, product.hoverImage];
  const handlePrev = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
  const handleNext = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10">
      {/* Carousel */}
      <div className="w-full md:w-1/2 flex flex-col items-center gap-4">
        <div className="relative w-full">
          <img src={images[current]} alt={`Product ${current + 1}`} className="rounded-xl w-full" />
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
            ◀
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
          >
            ▶
          </button>
        </div>
        <p className="text-sm text-gray-500">Image {current + 1} of {images.length}</p>
      </div>

      {/* Details */}
      <div className="w-full md:w-1/2 space-y-6">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl font-semibold text-gray-700">₹{product.price}</p>

        {/* Sizes */}
        <div className="space-y-1">
          <p className="font-medium">Size:</p>
          <div className="flex gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`px-4 py-1 border rounded-full ${
                  selectedSize === size ? 'bg-black text-white' : 'bg-white'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>


{/* Quantity Selector */}
<div className="space-y-1">
  <p className="font-medium">Quantity (Stock: {product.stock})</p>
  <div className="flex items-center gap-4">
    <button
      onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
      disabled={quantity <= 1}
      className={`p-2 rounded-md border 
        ${quantity <= 1 ? "cursor-not-allowed opacity-40" : "hover:bg-gray-100"} 
        transition`}
    >
      <Minus size={18} />
    </button>

    {/* Animated Quantity */}
    <AnimatePresence mode="wait" initial={false}>
      <Motion.span
        key={quantity}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="text-lg font-semibold w-6 text-center"
      >
        {quantity}
      </Motion.span>
    </AnimatePresence>

    <button
      onClick={() =>
        setQuantity((prev) => Math.min(product.stock, prev + 1))
      }
      disabled={quantity >= product.stock}
      className={`p-2 rounded-md border 
        ${quantity >= product.stock ? "cursor-not-allowed opacity-40" : "hover:bg-gray-100"} 
        transition`}
    >
      <Plus size={18} />
    </button>
  </div>
</div>


        {/* Description */}
        <div>
          <p className="text-gray-600">{product.description}</p>
        </div>

        {/* Error / Success */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>

        {/* Tags (Moved Below) */}
        {product.tags?.length > 0 && (
          <div className="space-y-1 pt-6">
            <p className="font-medium">Tags:</p>
            <div className="flex gap-2 flex-wrap">
              {product.tags.map((tag, i) => (
                <span key={i} className="bg-gray-100 text-sm px-3 py-1 rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
