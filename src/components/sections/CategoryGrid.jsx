import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../../data/categories';

const CategoryGrid = () => {
  const navigate = useNavigate();

  return (
    <section className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-2xl text-jewel-dark">
          Shop by Category
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => navigate(`/jewellery/${cat.slug}`)}
            className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-border/80 hover:border-gold card-hover"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-gold/50">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-jewel-dark">
                {cat.name}
              </p>
              <p className="text-[11px] text-text-muted">
                {cat.productCount} styles
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;

