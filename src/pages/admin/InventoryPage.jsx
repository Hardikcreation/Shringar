import React from 'react';
import { products } from '../../data/products';

const InventoryPage = () => {
  const total = products.length;
  const low = products.filter((p) => p.stock > 0 && p.stock < 10).length;
  const out = products.filter((p) => p.stock === 0).length;
  const inStock = total - low - out;

  return (
    <div className="space-y-3 text-xs">
      <div className="grid md:grid-cols-4 gap-3">
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <p className="text-slate-500">Total Products</p>
          <p className="text-xl font-semibold text-jewel-dark">{total}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <p className="text-slate-500">In Stock</p>
          <p className="text-xl font-semibold text-emerald-600">{inStock}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <p className="text-slate-500">Low Stock (&lt;10)</p>
          <p className="text-xl font-semibold text-amber-600">{low}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-3">
          <p className="text-slate-500">Out of Stock</p>
          <p className="text-xl font-semibold text-red-600">{out}</p>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto">
        <table className="w-full text-left text-[11px]">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-3 py-2">Product</th>
              <th className="px-3 py-2">SKU</th>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">Stock</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-t border-slate-100"
              >
                <td className="px-3 py-2">{p.name}</td>
                <td className="px-3 py-2">{p.sku}</td>
                <td className="px-3 py-2 capitalize">{p.category}</td>
                <td className="px-3 py-2">{p.stock}</td>
                <td className="px-3 py-2">
                  <span
                    className={`px-2 py-0.5 rounded-full ${
                      p.stock === 0
                        ? 'bg-red-50 text-red-600'
                        : p.stock < 10
                        ? 'bg-amber-50 text-amber-700'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {p.stock === 0
                      ? 'Out of Stock'
                      : p.stock < 10
                      ? 'Low Stock'
                      : 'In Stock'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryPage;

