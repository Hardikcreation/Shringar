import React from 'react';
import { reviews } from '../../data/reviews';
import { products } from '../../data/products';

const ReviewsPage = () => {
  return (
    <div className="space-y-3 text-xs">
      <h1 className="text-base font-semibold text-jewel-dark">
        Reviews ({reviews.length})
      </h1>
      <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto">
        <table className="w-full text-left text-[11px]">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-3 py-2">Product</th>
              <th className="px-3 py-2">Customer</th>
              <th className="px-3 py-2">Rating</th>
              <th className="px-3 py-2">Review</th>
              <th className="px-3 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r) => {
              const product = products.find((p) => p.id === r.productId);
              return (
                <tr
                  key={r.id}
                  className="border-t border-slate-100"
                >
                  <td className="px-3 py-2">
                    {product ? product.name : r.productId}
                  </td>
                  <td className="px-3 py-2">{r.userName}</td>
                  <td className="px-3 py-2">{r.rating}★</td>
                  <td className="px-3 py-2 max-w-xs truncate">
                    {r.comment}
                  </td>
                  <td className="px-3 py-2">{r.createdAt}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReviewsPage;

