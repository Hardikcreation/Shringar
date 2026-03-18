import React from 'react';
import { Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import Button from '../../components/ui/Button';
import { Link, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const {
    cartItems,
    subtotal,
    discount,
    total,
    deliveryCharge,
    appliedCoupon,
    removeFromCart,
    updateQty,
    applyCoupon,
  } = useCart();
  const [couponCode, setCouponCode] = React.useState('');
  const navigate = useNavigate();

  const handleApplyCoupon = () => {
    applyCoupon(couponCode);
  };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-10xl mx-auto px-4 py-10 text-center">
        <div className="w-24 h-24 rounded-full border border-border mx-auto mb-4 flex items-center justify-center text-4xl">
          🛒
        </div>
        <h1 className="font-display text-2xl text-jewel-dark mb-2">
          Your cart is empty
        </h1>
        <p className="text-sm text-text-muted mb-4">
          Discover handcrafted artificial jewellery that complements every look.
        </p>
        <Button onClick={() => navigate('/')}>Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-8 grid md:grid-cols-3 gap-6">
      <section className="md:col-span-2 bg-white rounded-2xl border border-border/80 p-4 space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 border-b border-border/60 pb-3 last:border-b-0 last:pb-0"
          >
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-gold-pale/60">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-jewel-dark truncate">
                {item.name}
              </h3>
              <p className="text-[11px] text-text-muted">SKU: {item.sku}</p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center rounded-full border border-border/80 bg-white">
                    <button
                      type="button"
                      className="px-3 py-1 text-xs"
                      onClick={() =>
                        updateQty(item.id, Math.max(1, item.qty - 1))
                      }
                    >
                      −
                    </button>
                    <span className="px-3 py-1 text-xs border-x border-border/60 min-w-[32px] text-center">
                      {item.qty}
                    </span>
                    <button
                      type="button"
                      className="px-3 py-1 text-xs"
                      onClick={() =>
                        updateQty(
                          item.id,
                          Math.min(item.stock ?? 99, item.qty + 1),
                        )
                      }
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFromCart(item.id)}
                    className="inline-flex items-center gap-1 text-[11px] text-error"
                  >
                    <Trash2 className="w-3 h-3" />
                    Remove
                  </button>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-jewel-dark">
                    ₹{item.price * item.qty}
                  </p>
                  <p className="text-[11px] text-text-muted">
                    ₹{item.price} each
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <aside className="bg-white rounded-2xl border border-border/80 p-4 space-y-3">
        <h2 className="text-sm font-semibold text-jewel-dark">
          Order Summary
        </h2>
        <div className="flex justify-between text-xs text-text-muted">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between text-xs text-text-muted">
          <span>Discount</span>
          <span className={discount ? 'text-success' : ''}>
            {discount ? `−₹${discount}` : '₹0'}
          </span>
        </div>
        <div className="flex justify-between text-xs text-text-muted">
          <span>Delivery</span>
          <span>{deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}</span>
        </div>
        <hr className="border-border/70" />
        <div className="flex justify-between text-sm font-semibold text-jewel-dark">
          <span>Total</span>
          <span>₹{total}</span>
        </div>

        <div className="pt-2">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Apply coupon"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              className="flex-1 rounded-md border border-border/80 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-gold"
            />
            <Button
              variant="secondary"
              size="sm"
              onClick={handleApplyCoupon}
            >
              Apply
            </Button>
          </div>
          {appliedCoupon && (
            <p className="mt-1 text-[11px] text-success">
              {appliedCoupon.code} applied ✓
            </p>
          )}
        </div>

        <Button
          className="w-full mt-2"
          onClick={() => navigate('/checkout')}
        >
          Proceed to Checkout
        </Button>

        <div className="pt-2 border-t border-border/60">
          <p className="text-[11px] text-text-muted mb-1">
            We accept
          </p>
          <div className="flex gap-2 text-[10px] text-jewel-dark/80">
            <span className="px-2 py-1 rounded bg-gold-pale">Visa</span>
            <span className="px-2 py-1 rounded bg-gold-pale">Mastercard</span>
            <span className="px-2 py-1 rounded bg-gold-pale">UPI</span>
            <span className="px-2 py-1 rounded bg-gold-pale">COD</span>
          </div>
        </div>

        <p className="text-[11px] text-text-muted">
          Or{' '}
          <Link to="/" className="text-gold underline">
            continue shopping
          </Link>
          .
        </p>
      </aside>
    </div>
  );
};

export default CartPage;

