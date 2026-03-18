import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import Badge from './Badge';
import Button from './Button';
import StarRating from './StarRating';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product, showAddToCart = true }) => {
  const navigate = useNavigate();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const inWishlist = isInWishlist(product.id);

  const discountPercent = product.discountPrice
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : 0;

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product, 1);
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group relative bg-white rounded-2xl border border-border/80 overflow-hidden card-hover cursor-pointer"
    >
      <div className="relative">
        <div className="aspect-square overflow-hidden bg-gold-pale/60">
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="absolute top-3 left-3 flex flex-col gap-1">
          {product.isNew && <Badge variant="new">NEW</Badge>}
          {discountPercent > 0 && (
            <Badge variant="sale">{discountPercent}% OFF</Badge>
          )}
          {product.stock <= 3 && product.stock > 0 && (
            <Badge variant="low-stock">Only {product.stock} left</Badge>
          )}
          {product.stock === 0 && (
            <Badge variant="out-of-stock">Out of Stock</Badge>
          )}
        </div>
        <button
          type="button"
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 p-1.5 rounded-full bg-white/90 shadow-md text-jewel-dark hover:text-gold"
        >
          <Heart
            className="w-4 h-4"
            fill={inWishlist ? '#B8860B' : 'none'}
          />
        </button>
      </div>
      <div className="px-3.5 pt-3 pb-3">
        <h3 className="text-sm font-medium text-jewel-dark line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-1">
          <StarRating
            rating={product.ratings ?? 0}
            showCount
            count={product.numReviews}
          />
        </div>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-semibold text-gold">
            ₹{product.discountPrice ?? product.price}
          </span>
          {product.discountPrice && (
            <span className="text-xs text-text-muted line-through">
              ₹{product.price}
            </span>
          )}
        </div>
        {showAddToCart && (
          <div className="mt-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
            <Button
              variant="primary"
              size="sm"
              className="w-full"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

