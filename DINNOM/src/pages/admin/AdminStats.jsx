import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, BarChart, Bar
} from 'recharts';
import { useAuth } from '../../context/AuthContext';
import toast from 'react-hot-toast';

const StatCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
    <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">{title}</h3>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

const AdminStats = () => {
  const [stats, setStats] = useState({
    dailyStats: [],
    summary: { totalRevenue: 0, totalOrders: 0 },
    categoryStats: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { token } = useAuth();

  useEffect(() => {
    const fetchStats = async () => {
      if (!token) {
        setError('Authentication token not found.');
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/orders/stats', {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.message || 'Failed to fetch stats');
        }

        const data = await response.json();

        const formattedData = data.dailyStats.map(item => ({
          ...item,
          date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        }));

        setStats({
          dailyStats: formattedData,
          summary: data.summary,
          categoryStats: data.categoryStats || []
        });
      } catch (err) {
        setError(err.message);
        toast.error(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [token]);

  if (loading) return <div className="flex justify-center items-center h-64"><p>Loading statistics...</p></div>;
  if (error) return <div className="text-center py-10 text-red-500 bg-red-50 p-4 rounded-md">{error}</div>;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-zinc-800">Sales Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Revenue (90 days)" value={`₹${stats.summary.totalRevenue.toFixed(2)}`} />
        <StatCard title="Total Orders (90 days)" value={stats.summary.totalOrders} />
        <StatCard
          title="Avg. Order Value"
          value={stats.summary.totalOrders > 0
            ? `₹${(stats.summary.totalRevenue / stats.summary.totalOrders).toFixed(2)}`
            : '₹0.00'}
        />
      </div>

      {/* Line Chart */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold mb-4 text-zinc-700">
          Sales & Orders Over Time (Last 90 Days)
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={stats.dailyStats} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
            <XAxis dataKey="date" stroke="#666" />
            <YAxis
              yAxisId="left"
              stroke="#8884d8"
              label={{ value: 'Sales (₹)', angle: -90, position: 'insideLeft', fill: '#8884d8' }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#82ca9d"
              label={{ value: 'Orders', angle: -90, position: 'insideRight', fill: '#82ca9d' }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', backdropFilter: 'blur(5px)', border: '1px solid #ddd' }}
              formatter={(value, name) => (name === 'Total Sales' ? `₹${value.toFixed(2)}` : value)}
            />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="totalSales" name="Total Sales" stroke="#8884d8" strokeWidth={2} activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="totalOrders" name="Total Orders" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-zinc-700">Revenue by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.categoryStats} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="category" />
              <YAxis tickFormatter={(value) => `₹${value}`} />
              <Tooltip formatter={(value) => `₹${value.toFixed(2)}`} />
              <Bar dataKey="totalRevenue" fill="#8884d8" name="Total Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-zinc-700">Items Sold by Category</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.categoryStats} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="totalItemsSold" fill="#82ca9d" name="Items Sold" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminStats;
