import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';

const NewArrivals = () => {
  const newProducts = products.filter((p) => p.isNew).slice(0, 4);

  if (newProducts.length === 0) return null;

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-2xl text-jewel-dark">
          New Arrivals
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;

