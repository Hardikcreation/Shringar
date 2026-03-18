import React from 'react';

const Loader = ({ label = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="flex items-center gap-3">
        <span className="h-4 w-4 rounded-full border-2 border-gold/40 border-t-gold animate-spin" />
        <span className="text-sm text-text-muted">{label}</span>
      </div>
    </div>
  );
};

export default Loader;

