import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { products } from '../../data/products';
import { orders } from '../../data/orders';

const revenueData = [
  { date: 'Mon', revenue: 14500 },
  { date: 'Tue', revenue: 18200 },
  { date: 'Wed', revenue: 12100 },
  { date: 'Thu', revenue: 21000 },
  { date: 'Fri', revenue: 17500 },
  { date: 'Sat', revenue: 22400 },
  { date: 'Sun', revenue: 19800 },
];

const statusCounts = {
  Pending: 12,
  Confirmed: 23,
  Processing: 18,
  Shipped: 31,
  Delivered: 52,
  Cancelled: 11,
};

const statusColors = {
  Pending: '#FACC15',
  Confirmed: '#3B82F6',
  Processing: '#A855F7',
  Shipped: '#F97316',
  Delivered: '#22C55E',
  Cancelled: '#EF4444',
};

const DashboardPage = () => {
  const totalRevenue = 124500;
  const totalOrders = 152;
  const totalUsers = 340;
  const totalProducts = products.length;

  const pieData = Object.entries(statusCounts).map(([status, value]) => ({
    status,
    value,
  }));

  const bestSellers = [
    {
      rank: 1,
      product: 'Kundan Bridal Necklace Set',
      category: 'Necklace',
      sold: 45,
      revenue: 40455,
    },
    {
      rank: 2,
      product: 'Royal Polki Choker Necklace',
      category: 'Necklace',
      sold: 32,
      revenue: 37968,
    },
    {
      rank: 3,
      product: 'Pearl Jhumka Earrings',
      category: 'Earrings',
      sold: 54,
      revenue: 32346,
    },
    {
      rank: 4,
      product: 'Temple Lakshmi Long Haar',
      category: 'Necklace',
      sold: 21,
      revenue: 39879,
    },
    {
      rank: 5,
      product: 'Gold Plated Kada Bangles',
      category: 'Bangles',
      sold: 27,
      revenue: 26973,
    },
  ];

  const lowStock = products.filter((p) => p.stock <= 10);

  return (
    <div className="space-y-4">
      {/* Stats row */}
      <div className="grid md:grid-cols-4 gap-3 text-xs">
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <p className="text-slate-500">Total Revenue</p>
          <p className="text-xl font-semibold text-jewel-dark">
            ₹{totalRevenue.toLocaleString('en-IN')}
          </p>
          <p className="text-[11px] text-emerald-600 mt-1">+12% vs last week</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <p className="text-slate-500">Total Orders</p>
          <p className="text-xl font-semibold text-jewel-dark">
            {totalOrders}
          </p>
          <p className="text-[11px] text-emerald-600 mt-1">+8% vs last week</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <p className="text-slate-500">Total Users</p>
          <p className="text-xl font-semibold text-jewel-dark">
            {totalUsers}
          </p>
          <p className="text-[11px] text-emerald-600 mt-1">+23% vs last month</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <p className="text-slate-500">Products</p>
          <p className="text-xl font-semibold text-jewel-dark">
            {totalProducts}
          </p>
          <p className="text-[11px] text-slate-500 mt-1">Active catalogue</p>
        </div>
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-3 gap-3">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-medium text-slate-700 mb-2">
            Revenue (Last 7 days)
          </p>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <XAxis dataKey="date" tick={{ fontSize: 10 }} />
                <YAxis tick={{ fontSize: 10 }} />
                <Tooltip
                  formatter={(v) => [`₹${v.toLocaleString('en-IN')}`, 'Revenue']}
                />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#B8860B"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <p className="text-xs font-medium text-slate-700 mb-2">
            Orders by Status
          </p>
          <div className="h-44">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="status"
                  innerRadius={40}
                  outerRadius={60}
                >
                  {pieData.map((entry) => (
                    <Cell
                      key={entry.status}
                      fill={statusColors[entry.status]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-1 text-[10px]">
            {pieData.map((entry) => (
              <div
                key={entry.status}
                className="flex items-center gap-1"
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: statusColors[entry.status] }}
                />
                <span>{entry.status}</span>
                <span className="text-slate-500">({entry.value})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Best sellers + low stock */}
      <div className="grid lg:grid-cols-2 gap-3 text-xs">
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <p className="font-medium text-slate-700 mb-2">
            Best Selling Products
          </p>
          <table className="w-full text-left border-separate border-spacing-y-1">
            <thead className="text-[10px] text-slate-500">
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Category</th>
                <th>Sold</th>
                <th>Revenue</th>
              </tr>
            </thead>
            <tbody>
              {bestSellers.map((row) => (
                <tr
                  key={row.rank}
                  className="bg-slate-50/80"
                >
                  <td className="px-1 py-1">{row.rank}</td>
                  <td className="px-1 py-1">{row.product}</td>
                  <td className="px-1 py-1">{row.category}</td>
                  <td className="px-1 py-1">{row.sold}</td>
                  <td className="px-1 py-1">
                    ₹{row.revenue.toLocaleString('en-IN')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <p className="font-medium text-slate-700 mb-2">
            Low Stock Alerts
          </p>
          <div className="space-y-1 max-h-40 overflow-y-auto">
            {lowStock.map((p) => (
              <div
                key={p.id}
                className="flex items-center justify-between text-[11px] bg-slate-50/80 rounded-lg px-2 py-1"
              >
                <span>{p.name}</span>
                <span
                  className={`px-2 py-0.5 rounded-full ${
                    p.stock === 0
                      ? 'bg-red-50 text-red-600'
                      : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  Stock: {p.stock}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent orders */}
      <div className="bg-white rounded-xl border border-slate-200 p-3 text-xs">
        <p className="font-medium text-slate-700 mb-2">Recent Orders</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="text-[10px] text-slate-500">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map((order) => (
                <tr
                  key={order.orderId}
                  className="border-t border-slate-100"
                >
                  <td className="py-1">{order.orderId}</td>
                  <td className="py-1">{order.address.name}</td>
                  <td className="py-1">₹{order.totalAmount}</td>
                  <td className="py-1">{order.status}</td>
                  <td className="py-1">{order.placedAt.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

