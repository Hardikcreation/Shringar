import React from 'react';

const EditProductPage = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 text-xs">
      <h1 className="text-base font-semibold text-jewel-dark mb-1">
        Edit Product
      </h1>
      <p className="text-slate-500 mb-3">
        Static demo of editing layout. In a full build this would load product
        data by ID.
      </p>
      <p className="text-slate-500">
        Fields mirror the Add Product form and allow updating price, stock,
        tags, status and images.
      </p>
    </div>
  );
};

export default EditProductPage;

