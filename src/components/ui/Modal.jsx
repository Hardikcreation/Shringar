import React from 'react';

const Modal = ({ open, title, children, onClose, footer }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-md mx-4 rounded-2xl bg-white shadow-2xl border border-border p-5 animate-scale-in">
        {title && (
          <h3 className="text-base font-display text-jewel-dark mb-2">
            {title}
          </h3>
        )}
        <div className="text-sm text-jewel-dark/80">{children}</div>
        {footer && <div className="mt-4 flex justify-end gap-2">{footer}</div>}
      </div>
    </div>
  );
};

export default Modal;

