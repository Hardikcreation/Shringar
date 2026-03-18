import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-3 text-sm text-jewel-dark/90">
      <h1 className="font-display text-2xl text-jewel-dark mb-2">
        About Shringar
      </h1>
      <p>
        Shringar is a demo luxury artificial jewellery storefront inspired by
        Indian bridal and festive aesthetics. The experience is designed to
        showcase UX patterns for modern e‑commerce, from discovery and
        wishlist to checkout and admin management.
      </p>
      <p>
        Every card, interaction and animation here is crafted to evoke the
        warmth of gold, the richness of temple jewellery and the ease of
        shopping online.
      </p>
      <p className="text-xs text-text-muted">
        Note: This project is for demonstration only. No real products are sold
        and no payments are processed.
      </p>
    </div>
  );
};

export default AboutPage;

