import React from 'react';

const HelpPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 text-sm space-y-3">
      <h1 className="font-display text-2xl text-jewel-dark mb-1">
        Help & FAQ
      </h1>
      <div className="space-y-2 text-xs text-jewel-dark/90">
        <details className="bg-white border border-border/80 rounded-xl p-3">
          <summary className="font-medium cursor-pointer">
            Is this a real jewellery store?
          </summary>
          <p className="mt-1 text-text-muted">
            No. Shringar is a fully front-end demo built to showcase UX/UI
            patterns for an artificial jewellery e‑commerce platform. No real
            payments or orders are processed.
          </p>
        </details>
        <details className="bg-white border border-border/80 rounded-xl p-3">
          <summary className="font-medium cursor-pointer">
            Which logins can I use?
          </summary>
          <p className="mt-1 text-text-muted">
            Use customer login <strong>priya@demo.com / demo123</strong> or
            admin login <strong>admin@demo.com / admin123</strong> on the login
            screen to explore respective flows.
          </p>
        </details>
        <details className="bg-white border border-border/80 rounded-xl p-3">
          <summary className="font-medium cursor-pointer">
            Can I test cart, wishlist and checkout?
          </summary>
          <p className="mt-1 text-text-muted">
            Yes. All flows are implemented using local React state and context
            with mock data. Add items to cart, apply coupons, place an order and
            view tracking in a safe sandbox.
          </p>
        </details>
      </div>
    </div>
  );
};

export default HelpPage;

