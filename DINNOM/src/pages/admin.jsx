import React, { useState } from 'react';
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
    productId: '',
    name: '',
    price: '',
    description: '',
    gender: '',
    category: '',
    stock: '',
    mainImage: '',
    hoverImage: '',
    sizes: '',
    tags: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedProduct = {
      ...product,
      price: Number(product.price),
      stock: Number(product.stock),
      sizes: product.sizes.split(',').map(s => s.trim()),
      tags: product.tags.split(',').map(t => t.trim())
    };

    console.log('Submitted Product:', formattedProduct);

    // You can now POST formattedProduct to your backend API

    setProduct({
      productId: '',
      name: '',
      price: '',
      description: '',
      gender: '',
      category: '',
      stock: '',
      mainImage: '',
      hoverImage: '',
      sizes: '',
      tags: ''
    });
  };

  return (
    <div className="min-h-screen bg-white text-black p-8 space-y-10">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard - Fashion Store</h1>

      {/* Product Add Form */}
      <section className="bg-gray-100 p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Add New Product</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="productId" value={product.productId} onChange={handleChange} placeholder="Product ID" className="border p-2 rounded" required />
          <input name="name" value={product.name} onChange={handleChange} placeholder="Product Name" className="border p-2 rounded" required />
          <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" className="border p-2 rounded" required />
          <input name="category" value={product.category} onChange={handleChange} placeholder="Category" className="border p-2 rounded" required />
          <input name="gender" value={product.gender} onChange={handleChange} placeholder="Gender (Male/Female)" className="border p-2 rounded" required />
          <input type="number" name="stock" value={product.stock} onChange={handleChange} placeholder="Stock" className="border p-2 rounded" required />
          <input name="mainImage" value={product.mainImage} onChange={handleChange} placeholder="Main Image URL" className="border p-2 rounded" required />
          <input name="hoverImage" value={product.hoverImage} onChange={handleChange} placeholder="Hover Image URL" className="border p-2 rounded" required />
          <input name="sizes" value={product.sizes} onChange={handleChange} placeholder="Sizes (comma separated)" className="border p-2 rounded" required />
          <input name="tags" value={product.tags} onChange={handleChange} placeholder="Tags (comma separated)" className="border p-2 rounded" required />
          <textarea name="description" value={product.description} onChange={handleChange} placeholder="Description" className="border p-2 rounded col-span-full" rows="3" required />
          <button type="submit" className="bg-black text-white py-2 px-4 rounded col-span-full">Add Product</button>
        </form>
      </section>

      {/* Stats Overview */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Products" value="243" />
        <StatCard title="Total Sales" value="$120,000" />
        <StatCard title="Most Sold Product" value="Black Oversized Hoodie" />
      </section>

      {/* Sales Chart */}
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
