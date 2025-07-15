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
    name: '',
    image: '',
    price: '',
    category: '',
    description: ''
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product submitted:', product);
    // Call API or backend logic here
    setProduct({ name: '', image: '', price: '', category: '', description: '' });
  };

  return (
    <div className="min-h-screen bg-white text-black p-8 space-y-10">
      {/* Heading */}
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard - Fashion Store</h1>

      {/* Product Add Form */}
      <section className="bg-gray-100 p-6 rounded-lg shadow space-y-4">
        <h2 className="text-xl font-semibold">Add New Product</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            className="border p-2 rounded"
            value={product.name}
            onChange={handleChange}
            required
          />
          <input
            type="url"
            name="image"
            placeholder="Image URL"
            className="border p-2 rounded"
            value={product.image}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="border p-2 rounded"
            value={product.price}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="border p-2 rounded"
            value={product.category}
            onChange={handleChange}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            className="border p-2 rounded col-span-full"
            value={product.description}
            onChange={handleChange}
            rows="3"
            required
          />
          <button type="submit" className="bg-black text-white py-2 px-4 rounded col-span-full">
            Add Product
          </button>
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
