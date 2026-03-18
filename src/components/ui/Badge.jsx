import React from 'react';

const variantClasses = {
  new: 'bg-success/10 text-success border-success/40',
  sale: 'bg-error/10 text-error border-error/40',
  'low-stock': 'bg-amber-100 text-amber-700 border-amber-300',
  'out-of-stock': 'bg-slate-100 text-slate-600 border-slate-300',
  featured: 'bg-gold-pale text-gold border-gold/60',
};

const Badge = ({ children, variant = 'featured', className = '' }) => {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[11px] font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;

