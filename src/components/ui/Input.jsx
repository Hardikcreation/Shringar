import React from 'react';

const Input = ({ label, error, className = '', ...props }) => {
  return (
    <div className={`space-y-1 ${className}`}>
      {label && (
        <label className="block text-xs font-medium text-text-muted">
          {label}
        </label>
      )}
      <input
        className={`w-full rounded-md border border-border/80 bg-white px-3 py-2 text-sm text-jewel-dark placeholder:text-text-muted/60 focus:outline-none focus:ring-1 focus:ring-gold ${
          error ? 'border-error focus:ring-error' : ''
        }`}
        {...props}
      />
      {error && (
        <p className="text-[11px] text-error">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;

