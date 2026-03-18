import React from 'react';
import { products } from '../../data/products';
import Button from '../../components/ui/Button';

const ProductsPage = () => {
  return (
    <div className="space-y-3 text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-base font-semibold text-jewel-dark">
          Products ({products.length})
        </h1>
        <div className="flex flex-wrap gap-2">
          <input
            type="text"
            placeholder="Search by name or SKU..."
            className="rounded-full border border-slate-200 px-3 py-1.5 text-xs min-w-[180px]"
          />
          <select className="rounded-full border border-slate-200 px-3 py-1.5 text-xs">
            <option>All Categories</option>
            <option>Earrings</option>
            <option>Necklaces</option>
          </select>
          <Button
            size="sm"
            className="px-3 py-1.5"
          >
            + Add Product
          </Button>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto">
        <table className="w-full text-left text-[11px]">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-3 py-2">Image</th>
              <th className="px-3 py-2">Name / SKU</th>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">Price</th>
              <th className="px-3 py-2">Discount</th>
              <th className="px-3 py-2">Stock</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr
                key={p.id}
                className="border-t border-slate-100"
              >
                <td className="px-3 py-2">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-10 h-10 rounded-md object-cover"
                  />
                </td>
                <td className="px-3 py-2">
                  <div className="truncate max-w-[180px]">
                    <p className="font-medium text-jewel-dark">{p.name}</p>
                    <p className="text-slate-500 text-[10px]">SKU: {p.sku}</p>
                  </div>
                </td>
                <td className="px-3 py-2 capitalize">{p.category}</td>
                <td className="px-3 py-2">₹{p.price}</td>
                <td className="px-3 py-2 text-emerald-600">
                  {p.discountPrice ? `₹${p.discountPrice}` : '—'}
                </td>
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
                    {p.stock}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700">
                    Active
                  </span>
                </td>
                <td className="px-3 py-2">
                  <button className="text-gold mr-2">Edit</button>
                  <button className="text-red-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsPage;

