import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import ProductCard from '../../components/ui/ProductCard';

const ProductListingPage = () => {
  const { category } = useParams();

  const filtered = products.filter(
    (p) => p.category === category || p.subcategory === category,
  );

  return (
    <div className="max-w-10xl mx-auto px-4 py-6 md:py-8 flex gap-6">
      {/* Sidebar placeholder for filters */}
      <aside className="hidden md:block w-60 shrink-0 bg-white rounded-2xl border border-border/80 p-4">
        <h2 className="text-sm font-semibold text-jewel-dark mb-2">Filters</h2>
        <p className="text-xs text-text-muted">
          Full filter controls to be implemented as per spec. Products are
          currently filtered by category.
        </p>
      </aside>
      <section className="flex-1">
        <div className="flex items-baseline justify-between mb-4 gap-3">
          <div>
            <h1 className="font-display text-2xl text-jewel-dark capitalize">
              {category?.replace('-', ' ')}
            </h1>
            <p className="text-xs text-text-muted">
              Showing {filtered.length} products
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductListingPage;

