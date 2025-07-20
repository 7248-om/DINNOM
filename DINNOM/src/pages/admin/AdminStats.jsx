import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#a28fd0'];

const AdminStats = () => {
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalUsers: 0,
    totalProducts: 0,
  });

  const [ordersPerMonth, setOrdersPerMonth] = useState([]);
  const [categoryDistribution, setCategoryDistribution] = useState([]);

  useEffect(() => {
    // TODO: Replace with real API calls

    // Simulate stat values
    setStats({
      totalRevenue: 145000,
      totalOrders: 1200,
      totalUsers: 300,
      totalProducts: 240,
    });

    // Simulate monthly order data
    setOrdersPerMonth([
      { month: 'Jan', orders: 100 },
      { month: 'Feb', orders: 150 },
      { month: 'Mar', orders: 200 },
      { month: 'Apr', orders: 250 },
      { month: 'May', orders: 300 },
      { month: 'Jun', orders: 200 },
    ]);

    // Simulate category distribution
    setCategoryDistribution([
      { name: 'Shirts', value: 80 },
      { name: 'Pants', value: 60 },
      { name: 'Accessories', value: 40 },
      { name: 'Shoes', value: 30 },
      { name: 'Outerwear', value: 30 },
    ]);
  }, []);

  return (
    <div className="p-6 space-y-10">
      {/* Stat Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Revenue', value: stats.totalRevenue, suffix: '₹' },
          { label: 'Total Orders', value: stats.totalOrders },
          { label: 'Total Users', value: stats.totalUsers },
          { label: 'Total Products', value: stats.totalProducts },
        ].map((item, index) => (
          <div key={index} className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg">
            <h4 className="text-sm text-gray-400 mb-1">{item.label}</h4>
            <h2 className="text-3xl font-bold">
              <CountUp
                start={0}
                end={item.value}
                duration={2.5}
                separator="," 
                suffix={item.suffix || ''}
              />
            </h2>
          </div>
        ))}
      </div>

      {/* Bar Chart - Orders Per Month */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Orders Per Month
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ordersPerMonth}>
            <XAxis dataKey="month" stroke="#ccc" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="orders" fill="#8884d8" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart - Category Distribution */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Product Category Distribution
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryDistribution}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {categoryDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AdminStats;
