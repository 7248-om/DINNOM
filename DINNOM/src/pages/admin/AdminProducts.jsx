import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { FaEdit, FaTrash } from 'react-icons/fa';

const AdminProducts = () => {
  const [product, setProduct] = useState({
    productId: '', name: '', price: '', description: '', gender: '', category: '',
    stock: '', mainImage: '', hoverImage: '', sizes: '', tags: ''
  });

  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');
  const [filterGender, setFilterGender] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => { fetchProducts(); }, []);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5050/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      toast.error('Failed to fetch products');
      console.error(err);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'gender') {
      setProduct(prev => ({ ...prev, gender: value, category: '' }));
    } else {
      setProduct(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formattedProduct = {
      ...product,
      price: Number(product.price),
      stock: Number(product.stock),
      sizes: product.sizes.split(',').map(s => s.trim()),
      tags: product.tags.split(',').map(t => t.trim()),
    };

    const url = editingId
      ? `http://localhost:5050/api/products/${editingId}`
      : 'http://localhost:5050/api/products';

    const method = editingId ? 'PUT' : 'POST';

    try {
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(formattedProduct),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(editingId ? 'Product updated' : 'Product added');
        setProduct({ productId: '', name: '', price: '', description: '', gender: '', category: '', stock: '', mainImage: '', hoverImage: '', sizes: '', tags: '' });
        setEditingId(null);
        setShowModal(false);
        fetchProducts();
      } else {
        toast.error(data.error || 'Submission failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('Something went wrong');
    }

    setLoading(false);
  };

  const handleEdit = (prod) => {
    setProduct({
      ...prod,
      price: prod.price.toString(),
      stock: prod.stock.toString(),
      sizes: Array.isArray(prod.sizes) ? prod.sizes.join(', ') : '',
      tags: Array.isArray(prod.tags) ? prod.tags.join(', ') : '',
    });
    setEditingId(prod._id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5050/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        toast.success('Product deleted');
        fetchProducts();
      } else {
        toast.error('Delete failed');
      }
    } catch (err) {
      console.error(err);
      toast.error('Error deleting');
    }
    setLoading(false);
  };

  const getCategoriesByGender = (gender) => {
    const categories = new Set();
    products.forEach((p) => {
      if (p.gender === gender) {
        categories.add(p.category);
      }
    });
    return Array.from(categories);
  };

  const filteredProducts = products.filter(p => {
    const categoryMatch = filterCategory ? p.category === filterCategory : true;
    const genderMatch = filterGender ? p.gender === filterGender : true;
    return categoryMatch && genderMatch;
  });

  return (
    <div className="min-h-screen bg-white text-black p-6 space-y-10 relative">
      <Toaster position="top-right" />

      <h1 className="text-3xl font-bold mb-6">Admin Dashboard - Fashion Store</h1>

      <div className="flex flex-wrap gap-4 items-center">
        <div>
          <label className="mr-2 font-medium">Filter by Category:</label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="border p-2 rounded"
          >
            <option value=''>All</option>
            {[...new Set(products.map(p => p.category))].map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="mr-2 font-medium">Filter by Gender:</label>
          <select
            value={filterGender}
            onChange={(e) => setFilterGender(e.target.value)}
            className="border p-2 rounded"
          >
            <option value=''>All</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
          </select>
        </div>

        <button
          onClick={() => {
            setShowModal(true);
            setProduct({ productId: '', name: '', price: '', description: '', gender: '', category: '', stock: '', mainImage: '', hoverImage: '', sizes: '', tags: '' });
            setEditingId(null);
          }}
          className="bg-black text-white px-4 py-2 rounded ml-auto hover:bg-gray-900 transition"
        >
          + Add Product
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl relative">
            <button
              onClick={() => { setShowModal(false); setEditingId(null); }}
              className="absolute top-2 right-4 text-xl text-gray-600 hover:text-black"
            >✕</button>
            <h2 className="text-2xl font-semibold mb-4">{editingId ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" value={product.name} onChange={handleChange} placeholder="Name" className="border p-2 rounded-lg" required />
              <input name="price" value={product.price} onChange={handleChange} placeholder="Price ₹" className="border p-2 rounded-lg" required />
              <input name="stock" value={product.stock} onChange={handleChange} placeholder="Stock" className="border p-2 rounded-lg" required />
              <input name="mainImage" value={product.mainImage} onChange={handleChange} placeholder="Main Image URL" className="border p-2 rounded-lg" required />
              <input name="hoverImage" value={product.hoverImage} onChange={handleChange} placeholder="Hover Image URL" className="border p-2 rounded-lg" required />
              <input name="sizes" value={product.sizes} onChange={handleChange} placeholder="Sizes (S, M, L...)" className="border p-2 rounded-lg" required />
              <input name="tags" value={product.tags} onChange={handleChange} placeholder="Tags (e.g., trending)" className="border p-2 rounded-lg" required />

              <select name="gender" value={product.gender} onChange={handleChange} className="border p-2 rounded-lg" required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <select name="category" value={product.category} onChange={handleChange} className="border p-2 rounded-lg" required disabled={!product.gender}>
                <option value="">{product.gender ? 'Select Category' : 'Select Gender First'}</option>
                {getCategoriesByGender(product.gender).map((cat, idx) => (
                  <option key={idx} value={cat}>{cat}</option>
                ))}
              </select>

              <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" className="border p-2 rounded-lg md:col-span-2" rows={3} required />
              <button type="submit" className="bg-black hover:bg-gray-900 transition text-white py-2 px-4 rounded col-span-full">
                {editingId ? 'Update Product' : 'Add Product'}
              </button>
            </form>
          </div>
        </div>
      )}

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Product List</h2>
        {loading ? (
          <p className="text-gray-600">Loading...</p>
        ) : (
          <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-2">Image</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Category</th>
                  <th className="px-4 py-2">Price</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((prod, idx) => (
                  <tr key={prod._id} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}>
                    <td className="px-4 py-2">
                      <img src={prod.mainImage} alt={prod.name} className="h-16 w-16 object-cover rounded" />
                    </td>
                    <td className="px-4 py-2">{prod.name}</td>
                    <td className="px-4 py-2">{prod.category}</td>
                    <td className="px-4 py-2">₹{prod.price}</td>
                    <td className="px-4 py-2 flex gap-3 items-center">
                      <button onClick={() => handleEdit(prod)} className="text-blue-600 hover:scale-105 text-xl"><FaEdit /></button>
                      <button onClick={() => handleDelete(prod._id)} className="text-red-600 hover:scale-105 text-xl"><FaTrash /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminProducts;
