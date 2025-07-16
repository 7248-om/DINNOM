import React, { useEffect, useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const monthlySalesData = [
  { name: 'Jan', sales: 500 },
  { name: 'Feb', sales: 700 },
  { name: 'Mar', sales: 600 },
  { name: 'Apr', sales: 800 },
  { name: 'May', sales: 750 },
  { name: 'Jun', sales: 950 },
  { name: 'Jul', sales: 850 },
  { name: 'Aug', sales: 1100 },
  { name: 'Sep', sales: 1000 },
  { name: 'Oct', sales: 1200 },
  { name: 'Nov', sales: 1300 },
  { name: 'Dec', sales: 1500 },
];

const Admin = () => {
  const [product, setProduct] = useState({
    productId: '', name: '', price: '', description: '', gender: '', category: '',
    stock: '', mainImage: '', hoverImage: '', sizes: '', tags: ''
  });

  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [filterCategory, setFilterCategory] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => { fetchProducts(); }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5050/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error('Failed to fetch products', err);
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        alert(editingId ? 'Product updated successfully' : 'Product added successfully');
        setProduct({ productId: '', name: '', price: '', description: '', gender: '', category: '', stock: '', mainImage: '', hoverImage: '', sizes: '', tags: '' });
        setEditingId(null);
        setShowModal(false);
        fetchProducts();
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error('Error submitting product', err);
      alert('An error occurred');
    }
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
    const confirm = window.confirm('Are you sure you want to delete this product?');
    if (!confirm) return;

    try {
      const response = await fetch(`http://localhost:5050/api/products/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      if (response.ok) {
        alert('Product deleted');
        fetchProducts();
      } else {
        alert('Delete failed');
      }
    } catch (err) {
      console.error('Delete error', err);
      alert('Error deleting');
    }
  };

  const filteredProducts = filterCategory
    ? products.filter(p => p.category === filterCategory)
    : products;

  return (
    <div className="min-h-screen bg-white text-black p-8 space-y-10">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard - Fashion Store</h1>

      <div className="mb-4">
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

      {/* modal popup for edit/add form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl relative">
            <button
              onClick={() => { setShowModal(false); setEditingId(null); }}
              className="absolute top-2 right-2 text-xl text-gray-600 hover:text-black"
            >✕</button>
            <h2 className="text-xl font-semibold mb-4">{editingId ? 'Edit Product' : 'Add New Product'}</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product).map(([key, val]) => (
                key !== 'description' ? (
                  <input
                    key={key}
                    name={key}
                    value={val}
                    onChange={handleChange}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                    className="border p-2 rounded"
                    required
                  />
                ) : null
              ))}
              <textarea
                name="description"
                value={product.description}
                onChange={handleChange}
                placeholder="Description"
                className="border p-2 rounded col-span-full"
                rows="3"
                required
              />
              <button type="submit" className="bg-black text-white py-2 px-4 rounded col-span-full">
                {editingId ? 'Update Product' : 'Add Product'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* add product button */}
      <button
        onClick={() => { setShowModal(true); setProduct({ productId: '', name: '', price: '', description: '', gender: '', category: '', stock: '', mainImage: '', hoverImage: '', sizes: '', tags: '' }); setEditingId(null); }}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Add New Product
      </button>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Product List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead className="bg-black text-white">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(prod => (
                <tr key={prod._id} className="text-center">
                  <td className="border px-4 py-2">{prod.name}</td>
                  <td className="border px-4 py-2">{prod.category}</td>
                  <td className="border px-4 py-2">{prod.price}</td>
                  <td className="border px-4 py-2">
                    <button onClick={() => handleEdit(prod)} className="text-blue-600 mr-2">Edit</button>
                    <button onClick={() => handleDelete(prod._id)} className="text-red-600">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Products" value={products.length.toString()} />
        <StatCard title="Total Sales" value="$120,000" />
        <StatCard title="Most Sold Product" value="Black Oversized Hoodie" />
      </section>

      <section className="bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Monthly Sales</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlySalesData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#333" />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-gray-100 p-4 rounded-lg shadow text-center">
    <div className="text-sm text-gray-600">{title}</div>
    <div className="text-xl font-bold mt-2">{value}</div>
  </div>
);

export default Admin;
