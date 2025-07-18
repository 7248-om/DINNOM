import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5050/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error('Failed to load product', err));
  }, [id]);

  const handleAddToCart = async () => {
    setError('');
    setSuccess('');

    if (!selectedSize) {
      setError('Please select a size');
      return;
    }
    if (quantity > product.stock) {
      setError(`Only ${product.stock} items in stock`);
      return;
    }

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setError('You must be logged in to add items to the cart.');
        return;
      }

      await axios.post(
  'http://localhost:5050/api/cart/add',
  {
    productId: product._id,
    selectedSize,
    quantity
  },
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);


      setSuccess('Item added to cart!');
    } catch (err) {
      console.error(err);
      setError('Failed to add item to cart');
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-10">
      {/* Images */}
      <div className="w-full md:w-1/2 flex flex-col gap-4">
        <img src={product.mainImage} alt={product.name} className="rounded-xl" />
        <img src={product.hoverImage} alt={`${product.name} hover`} className="rounded-xl" />
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

        {/* Quantity Slider */}
        <div className="space-y-1">
          <p className="font-medium">Quantity (Stock: {product.stock})</p>
          <input
            type="range"
            min="1"
            max={Math.min(product.stock, 10)}
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <p>Selected: {quantity}</p>
        </div>

        {/* Tags */}
        {product.tags?.length > 0 && (
          <div className="space-y-1">
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

        {/* Description */}
        <div>
          <p className="text-gray-600">{product.description}</p>
        </div>

        {/* Error / Success */}
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-600">{success}</p>}

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
