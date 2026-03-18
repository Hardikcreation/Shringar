import React from 'react';

const AddProductPage = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 text-xs space-y-3">
      <h1 className="text-base font-semibold text-jewel-dark mb-1">
        Add Product
      </h1>
      <p className="text-slate-500">
        This is a static demo form showcasing the layout of product creation.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div>
            <label className="block mb-1 text-slate-600">
              Product Name
            </label>
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 text-slate-600">
              Category
            </label>
            <select className="w-full rounded-md border border-slate-300 px-3 py-2">
              <option>Earrings</option>
              <option>Necklaces</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 text-slate-600">
              Subcategory
            </label>
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 text-slate-600">
              Description
            </label>
            <textarea
              rows="4"
              className="w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </div>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block mb-1 text-slate-600">
                Price (₹)
              </label>
              <input className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </div>
            <div>
              <label className="block mb-1 text-slate-600">
                Discount Price (₹)
              </label>
              <input className="w-full rounded-md border border-slate-300 px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="block mb-1 text-slate-600">
              Stock Quantity
            </label>
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1 text-slate-600">
              SKU Code
            </label>
            <input className="w-full rounded-md border border-slate-300 px-3 py-2" />
          </div>
          <div className="border border-dashed border-slate-300 rounded-md p-3 text-slate-500">
            Image upload area (demo). Paste URLs to preview images in a real
            implementation.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;

