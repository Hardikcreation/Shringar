import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import { reviews as allReviews } from '../../data/reviews';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import Breadcrumb from '../../components/ui/Breadcrumb';
import StarRating from '../../components/ui/StarRating';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [activeImage, setActiveImage] = useState(product?.images?.[0]);
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  if (!product) {
    return (
      <div className="max-w-10xl mx-auto px-4 py-10">
        <p className="text-sm text-text-muted">Product not found.</p>
      </div>
    );
  }

  const productReviews = allReviews.filter((r) => r.productId === product.id);

  const discountPercent = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  const inWishlist = isInWishlist(product.id);

  const handleWishlistToggle = () => {
    if (inWishlist) removeFromWishlist(product.id);
    else addToWishlist(product);
  };

  const stockLabel =
    product.stock === 0
      ? { text: 'Out of Stock', variant: 'out-of-stock' }
      : product.stock <= 3
      ? { text: `Only ${product.stock} left!`, variant: 'low-stock' }
      : { text: 'In Stock', variant: 'new' };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
      <Breadcrumb
        items={[
          { label: 'Home', to: '/' },
          { label: product.category, to: `/jewellery/${product.category}` },
          { label: product.name },
        ]}
      />
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: images */}
        <div>
          <div className="rounded-3xl overflow-hidden bg-gold-pale/80 border border-border/80 relative group">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-[320px] md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="mt-3 flex gap-3">
            {product.images?.map((img) => (
              <button
                key={img}
                type="button"
                onClick={() => setActiveImage(img)}
                className={`w-16 h-16 rounded-xl overflow-hidden border ${
                  activeImage === img
                    ? 'border-gold'
                    : 'border-border/70 hover:border-gold'
                }`}
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: info */}
        <div>
          <h1 className="font-display text-2xl md:text-3xl text-jewel-dark">
            {product.name}
          </h1>
          <div className="mt-2 flex items-center gap-3">
            <StarRating
              rating={product.ratings ?? 0}
              showCount
              count={product.numReviews}
            />
            <Badge variant={stockLabel.variant}>{stockLabel.text}</Badge>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-2xl font-semibold text-gold">
              ₹{product.discountPrice ?? product.price}
            </span>
            {product.discountPrice && (
              <>
                <span className="text-sm text-text-muted line-through">
                  ₹{product.price}
                </span>
                <Badge variant="sale">{discountPercent}% OFF</Badge>
              </>
            )}
          </div>
          <div className="mt-2 text-xs text-text-muted">
            SKU: {product.sku}
          </div>
          <p className="mt-3 text-sm text-jewel-dark/90">
            {product.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            {product.tags?.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full bg-gold-pale text-jewel-dark"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Quantity + actions */}
          <div className="mt-5 flex items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs text-text-muted">Quantity</span>
              <div className="inline-flex items-center rounded-full border border-border/80 bg-white">
                <button
                  type="button"
                  className="px-3 py-1 text-sm"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                >
                  −
                </button>
                <span className="px-3 py-1 text-sm border-x border-border/60 min-w-[36px] text-center">
                  {qty}
                </span>
                <button
                  type="button"
                  className="px-3 py-1 text-sm"
                  onClick={() =>
                    setQty((q) =>
                      Math.min(product.stock || 99, q + 1),
                    )
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button
              variant="primary"
              onClick={() => addToCart(product, qty)}
              disabled={product.stock === 0}
            >
              Add to Cart
            </Button>
            <Button
              variant="secondary"
              onClick={handleWishlistToggle}
            >
              {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </Button>
          </div>

          <div className="mt-4 rounded-2xl bg-gold-pale px-4 py-3 text-xs text-jewel-dark/90 space-y-1.5">
            <p>🚚 Free delivery on orders above ₹599</p>
            <p>📦 Usually ships in 2-3 business days</p>
            <p>↩️ 7-day easy returns</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-8">
        <div className="flex border-b border-border/80 text-sm">
          {[
            { id: 'description', label: 'Description' },
            { id: 'reviews', label: 'Reviews' },
            { id: 'shipping', label: 'Shipping & Returns' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 -mb-px border-b-2 ${
                activeTab === tab.id
                  ? 'border-gold text-jewel-dark'
                  : 'border-transparent text-text-muted hover:text-jewel-dark'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-white border border-border/80 border-t-0 rounded-b-2xl px-4 py-4 text-sm mt-0">
          {activeTab === 'description' && (
            <p className="text-jewel-dark/90">
              {product.description} This piece is crafted from high-quality
              alloy with anti-tarnish plating. Store in a dry pouch and avoid
              direct contact with perfumes and water for long-lasting shine.
            </p>
          )}
          {activeTab === 'reviews' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wide">
                    Overall rating
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-semibold text-jewel-dark">
                      {product.ratings?.toFixed(1) ?? '0.0'}
                    </span>
                    <StarRating
                      rating={product.ratings ?? 0}
                      showCount
                      count={product.numReviews}
                    />
                  </div>
                </div>
              </div>
              <div className="border-t border-border/60 pt-3 space-y-3">
                {productReviews.length === 0 ? (
                  <p className="text-xs text-text-muted">
                    No reviews yet. Be the first to review this product.
                  </p>
                ) : (
                  productReviews.map((r) => (
                    <div key={r.id} className="border border-border/60 rounded-xl p-3">
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-sm font-medium text-jewel-dark">
                          {r.userName}
                        </p>
                        <span className="text-[11px] text-text-muted">
                          {r.createdAt}
                        </span>
                      </div>
                      <StarRating rating={r.rating} />
                      {r.title && (
                        <p className="mt-1 text-xs font-semibold text-jewel-dark">
                          {r.title}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-jewel-dark/90">
                        {r.comment}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
          {activeTab === 'shipping' && (
            <ul className="list-disc pl-4 space-y-1 text-jewel-dark/90">
              <li>Orders are dispatched within 24–48 working hours.</li>
              <li>Metro cities: delivery in 3–5 business days.</li>
              <li>Tier 2/3 cities: delivery in 5–7 business days.</li>
              <li>
                7-day easy returns in case of damage or manufacturing defects.
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;

