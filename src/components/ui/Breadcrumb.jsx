import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav className="text-xs text-text-muted mb-2" aria-label="Breadcrumb">
      <ol className="flex items-center flex-wrap gap-1">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1">
            {index > 0 && <span className="text-border">/</span>}
            {item.to ? (
              <Link
                to={item.to}
                className="hover:text-gold transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-jewel-dark">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

