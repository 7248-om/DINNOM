import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const staticCategories = {
  Male: ['Shirts', 'Pants', 'Hoodies', 'Footwear', 'Caps & Accessories'],
  Female: ['Dresses', 'Footwear', 'Caps & Accessories', 'Shirts and Tees', 'Pants and Skirts', 'Sweatshirts'],
};

const AdminNewArrivals = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [loading, setLoading] = useState(false);

  const [gender, setGender] = useState('Male');
  const [category, setCategory] = useState('');

  // Fetch all products
  useEffect(() => {
    axios.get('/api/products')
      .then(res => setAllProducts(res.data))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  // Fetch selected products for New Arrivals
  useEffect(() => {
    axios.get('/api/new-arrivals')
      .then(res => setSelectedIds(res.data.map(p => p._id)))
      .catch(err => console.error('Failed to fetch new arrivals:', err));
  }, []);

  const toggleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(pid => pid !== id));
    } else {
      if (selectedIds.length >= 3) {
        toast.error('Only 3 products allowed');
        return;
      }
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleSubmit = async () => {
    if (selectedIds.length !== 3) {
      toast.error('Select exactly 3 products');
      return;
    }

    try {
      setLoading(true);
      await axios.put('/api/new-arrivals', { productIds: selectedIds });
      toast.success('New Arrivals updated');
    } catch (error) {
      toast.error('Failed to update');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const selectedProducts = allProducts.filter(p => selectedIds.includes(p._id));
  const unselectedProducts = allProducts.filter(p => !selectedIds.includes(p._id));

  const filteredProducts = unselectedProducts.filter(p => {
    return p.gender === gender && (category === '' || p.category === category);
  });

  return (
    <div className="px-6 py-8">
      <h2 className="text-2xl font-semibold mb-4">🎯 Select 3 New Arrival Products</h2>

      {/* Selected Products Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3">🖤 Selected Products ({selectedIds.length}/3)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {selectedProducts.map((product) => (
            <div
              key={product._id}
              className="border border-black bg-gray-100 p-4 rounded-xl shadow relative"
            >
              <img
                src={product.mainImage}
                alt={product.name}
                className="h-48 w-full object-cover rounded-lg mb-3"
              />
              <h3 className="text-md font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm">₹{product.price}</p>
              <button
                onClick={() => toggleSelect(product._id)}
                className="absolute top-2 right-2 bg-black text-white px-3 py-1 text-xs rounded-full"
              >
                Unselect
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Gender Filter */}
      <div className="flex gap-4 mb-4">
        {['Male', 'Female'].map(g => (
          <button
            key={g}
            onClick={() => {
              setGender(g);
              setCategory('');
            }}
            className={`px-4 py-2 rounded-full border ${
              gender === g ? ' bg-blue-800 hover:bg-blue-800 text-white' : 'bg-white text-black'
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-6">
        {staticCategories[gender].map(cat => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-1 rounded-full border ${
              category === cat ? ' bg-blue-800 hover:bg-blue-800 text-white' : 'bg-white text-black'
            }`}
          >
            {cat}
          </button>
        ))}
        {category && (
          <button
            onClick={() => setCategory('')}
            className="text-sm underline text-gray-600 ml-2"
          >
            Clear Category
          </button>
        )}
      </div>

      {/* Filtered Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            onClick={() => toggleSelect(product._id)}
            className={`border rounded-xl p-4 cursor-pointer transition hover:shadow-md ${
              selectedIds.includes(product._id)
                ? 'border-black bg-gray-100 shadow'
                : 'border-gray-200'
            }`}
          >
            <img
              src={product.mainImage}
              alt={product.name}
              className="h-48 w-full object-cover rounded-lg mb-3"
            />
            <h3 className="text-md font-semibold">{product.name}</h3>
            <p className="text-gray-600 text-sm">₹{product.price}</p>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      <div className="mt-8">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="px-6 py-3 bg-blue-800 hover:bg-blue-800 text-white rounded-full transition disabled:opacity-50"
        >
          {loading ? 'Updating...' : 'Update New Arrivals'}
        </button>
      </div>
    </div>
  );
};

export default AdminNewArrivals;
