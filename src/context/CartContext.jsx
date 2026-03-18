import React, { createContext, useContext, useMemo, useState } from 'react';
import toast from 'react-hot-toast';
import { coupons } from '../data/coupons';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const addToCart = (product, qty = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: Math.min(item.qty + qty, product.stock ?? item.stock ?? 99),
              }
            : item,
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.discountPrice ?? product.price,
          image: product.images?.[0],
          stock: product.stock ?? 99,
          qty,
          sku: product.sku,
        },
      ];
    });
    toast.success('Added to cart 🛒');
  };

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
    toast.success('Removed from cart');
  };

  const updateQty = (productId, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, qty: Math.max(1, Math.min(qty, item.stock ?? 99)) }
          : item,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
    setAppliedCoupon(null);
  };

  const applyCoupon = (code) => {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) {
      toast.error('Please enter a coupon code');
      return;
    }

    const coupon = coupons.find((c) => c.code === trimmed);
    if (!coupon) {
      toast.error('Invalid coupon code');
      setAppliedCoupon(null);
      return;
    }

    if (!coupon.isActive) {
      toast.error('This coupon has expired');
      setAppliedCoupon(null);
      return;
    }

    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0,
    );

    if (subtotal < coupon.minOrder) {
      toast.error(`Minimum order amount is ₹${coupon.minOrder}`);
      setAppliedCoupon(null);
      return;
    }

    setAppliedCoupon(coupon);

    if (coupon.code === 'JEWEL10') {
      toast.success('10% discount applied ✓');
    } else if (coupon.code === 'SAVE100') {
      // This will actually not be active due to isActive check, but keep for clarity
      toast.error('This coupon has expired');
    } else {
      toast.success('Coupon applied successfully');
    }
  };

  const totals = useMemo(() => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0,
    );
    let discount = 0;
    if (appliedCoupon) {
      if (appliedCoupon.type === 'percentage') {
        discount = Math.round((subtotal * appliedCoupon.value) / 100);
      } else {
        discount = appliedCoupon.value;
      }
    }
    if (discount > subtotal) discount = subtotal;

    const deliveryCharge = subtotal - discount >= 599 || subtotal === 0 ? 0 : 49;
    const total = subtotal - discount + deliveryCharge;

    return {
      subtotal,
      discount,
      total,
      deliveryCharge,
    };
  }, [cartItems, appliedCoupon]);

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.qty, 0),
    [cartItems],
  );

  const value = {
    cartItems,
    cartCount,
    appliedCoupon,
    ...totals,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    applyCoupon,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
};

