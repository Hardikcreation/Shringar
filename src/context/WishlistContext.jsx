import React, { createContext, useContext, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

const WishlistContext = createContext(null);

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (product) => {
    setWishlistItems((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        toast('Already in wishlist', { icon: '❤️' });
        return prev;
      }
      toast.success('Added to wishlist ❤️');
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.discountPrice ?? product.price,
          image: product.images?.[0],
          sku: product.sku,
        },
      ];
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId));
    toast.success('Removed from wishlist');
  };

  const isInWishlist = (productId) =>
    wishlistItems.some((item) => item.id === productId);

  const wishlistCount = useMemo(
    () => wishlistItems.length,
    [wishlistItems],
  );

  const value = {
    wishlistItems,
    wishlistCount,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const ctx = useContext(WishlistContext);
  if (!ctx)
    throw new Error('useWishlist must be used within WishlistProvider');
  return ctx;
};

