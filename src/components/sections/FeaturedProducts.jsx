import React from 'react';
import { products } from '../../data/products';
import ProductCard from '../ui/ProductCard';

const FeaturedProducts = () => {
  const featured = products.filter((p) => p.isFeatured).slice(0, 8);

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-2xl text-jewel-dark">
          Featured Collection
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;

