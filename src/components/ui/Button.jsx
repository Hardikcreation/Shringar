import React from 'react';

const base =
  'inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-light disabled:opacity-60 disabled:cursor-not-allowed';

const variants = {
  primary:
    'bg-gold text-jewel-dark hover:bg-gold-light shadow-gold-soft px-4 py-2 text-sm',
  secondary:
    'border border-gold text-gold hover:bg-gold-pale px-4 py-2 text-sm',
  danger:
    'bg-error text-white hover:bg-red-700 px-4 py-2 text-sm',
  ghost:
    'text-jewel-dark hover:bg-gold-pale px-3 py-1.5 text-sm',
};

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: '',
  lg: 'px-5 py-2.5 text-sm',
};

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && (
        <span className="mr-2 h-3 w-3 rounded-full border-2 border-white/40 border-t-white animate-spin" />
      )}
      {children}
    </button>
  );
};

export default Button;

