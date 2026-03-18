import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import ProductCard from '../../components/ui/ProductCard';
import Button from '../../components/ui/Button';

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-14">
        <div className="bg-white rounded-3xl border border-border/80 shadow-gold-soft px-6 py-10 text-center space-y-4">
          <div className="w-20 h-20 mx-auto rounded-full border border-gold/60 flex items-center justify-center bg-gold-pale/40">
            <span className="text-3xl">♡</span>
          </div>
          <div>
            <h1 className="font-display text-2xl text-jewel-dark mb-1">
              Your wishlist is waiting
            </h1>
            <p className="text-sm text-text-muted">
              Tap the heart icon on any product you love to save it here and compare styles later.
            </p>
          </div>
          <div className="flex justify-center">
            <Link to="/jewellery/earrings">
              <Button variant="primary">Start Exploring</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
      <div className="flex items-baseline justify-between gap-3 mb-4">
        <div>
          <h1 className="font-display text-2xl text-jewel-dark">
            My Wishlist
          </h1>
          <p className="text-xs text-text-muted">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>
        <Link
          to="/jewellery/earrings"
          className="hidden md:inline-block text-xs text-gold hover:text-gold-light"
        >
          Continue shopping →
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wishlistItems.map((item) => (
          <div key={item.id} className="flex flex-col gap-2">
            <ProductCard
              product={{
                id: item.id,
                name: item.name,
                images: [item.image],
                price: item.price,
                discountPrice: item.price,
                ratings: 4.5,
                numReviews: 10,
                stock: 5,
                sku: item.sku,
              }}
              showAddToCart={false}
            />
            <div className="flex gap-2 px-1">
              <Button
                size="sm"
                variant="primary"
                className="flex-1 text-[11px] py-1.5"
                onClick={(e) => {
                  e.stopPropagation();
                  addToCart(
                    {
                      id: item.id,
                      name: item.name,
                      price: item.price,
                      discountPrice: item.price,
                      images: [item.image],
                      stock: 5,
                      sku: item.sku,
                    },
                    1,
                  );
                }}
              >
                Move to Cart
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="text-[11px] py-1.5"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFromWishlist(item.id);
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;

