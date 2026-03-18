import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from '../../components/ui/Button';

const CheckoutPage = () => {
  const { cartItems, subtotal, discount, deliveryCharge, total, clearCart } =
    useCart();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('home');
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10 text-center">
        <h1 className="font-display text-2xl text-jewel-dark mb-2">
          Your cart is empty
        </h1>
        <p className="text-sm text-text-muted">
          Add some jewellery pieces to proceed to checkout.
        </p>
      </div>
    );
  }

  const placeOrder = () => {
    setLoading(true);
    setTimeout(() => {
      clearCart();
      setLoading(false);
      navigate('/order-confirmation/ORD-20240315-001');
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-8 grid md:grid-cols-3 gap-6">
      <section className="md:col-span-2 space-y-4">
        {/* Step progress */}
        <div className="flex items-center gap-2 text-xs mb-2">
          {['Address', 'Payment', 'Confirm'].map((label, index) => {
            const current = index + 1;
            const completed = step > current;
            const active = step === current;
            return (
              <div key={label} className="flex items-center gap-1 flex-1">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] ${
                    completed
                      ? 'bg-gold text-jewel-dark'
                      : active
                      ? 'border border-gold text-gold'
                      : 'border border-border text-text-muted'
                  }`}
                >
                  {current}
                </div>
                <span
                  className={`text-[11px] ${
                    active ? 'text-jewel-dark' : 'text-text-muted'
                  }`}
                >
                  {label}
                </span>
                {current < 3 && (
                  <div className="flex-1 h-[1px] bg-border mx-1" />
                )}
              </div>
            );
          })}
        </div>

        {/* Step 1: Address */}
        {step === 1 && (
          <div className="bg-white rounded-2xl border border-border/80 p-4 space-y-4">
            <h2 className="text-sm font-semibold text-jewel-dark">
              Delivery Address
            </h2>
            <div className="space-y-3">
              <label className="flex gap-3 border border-border/80 rounded-xl p-3 cursor-pointer">
                <input
                  type="radio"
                  name="address"
                  value="home"
                  className="mt-1"
                  checked={selectedAddress === 'home'}
                  onChange={() => setSelectedAddress('home')}
                />
                <div className="text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-gold-pale text-jewel-dark">
                      Home
                    </span>
                    <span className="font-medium text-jewel-dark">
                      Priya Sharma
                    </span>
                    <span className="text-text-muted">·</span>
                    <span className="text-text-muted">
                      +91 98765 43210
                    </span>
                  </div>
                  <p className="mt-1 text-text-muted">
                    501, Shanti Nagar Apartments, Andheri East, Mumbai, Maharashtra
                    - 400069
                  </p>
                </div>
              </label>
              <label className="flex gap-3 border border-border/80 rounded-xl p-3 cursor-pointer">
                <input
                  type="radio"
                  name="address"
                  value="office"
                  className="mt-1"
                  checked={selectedAddress === 'office'}
                  onChange={() => setSelectedAddress('office')}
                />
                <div className="text-xs">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-gold-pale text-jewel-dark">
                      Office
                    </span>
                    <span className="font-medium text-jewel-dark">
                      Priya Sharma
                    </span>
                  </div>
                  <p className="mt-1 text-text-muted">
                    6th Floor, Emerald Towers, BKC, Mumbai, Maharashtra - 400051
                  </p>
                </div>
              </label>
            </div>
            <div className="pt-2">
              <p className="text-xs text-text-muted mb-2">
                + Add New Address (dummy form can be extended here).
              </p>
              <Button onClick={() => setStep(2)}>
                Continue to Payment
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Payment */}
        {step === 2 && (
          <div className="bg-white rounded-2xl border border-border/80 p-4 space-y-4">
            <h2 className="text-sm font-semibold text-jewel-dark">
              Payment Method
            </h2>
            <div className="space-y-3 text-xs">
              <label className="flex gap-3 border border-border/80 rounded-xl p-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  className="mt-1"
                  checked={paymentMethod === 'cod'}
                  onChange={() => paymentMethod !== 'cod' && setPaymentMethod('cod')}
                />
                <div>
                  <p className="font-medium text-jewel-dark">Cash on Delivery</p>
                  <p className="text-text-muted">
                    Pay in cash to the delivery partner.
                  </p>
                </div>
              </label>
              <label className="flex gap-3 border border-border/80 rounded-xl p-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  className="mt-1"
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                />
                <div className="flex-1">
                  <p className="font-medium text-jewel-dark">UPI</p>
                  <p className="text-text-muted">
                    Pay using any UPI app (PhonePe, GPay, Paytm, etc.).
                  </p>
                  {paymentMethod === 'upi' && (
                    <input
                      type="text"
                      placeholder="Enter UPI ID (demo only)"
                      className="mt-2 w-full rounded-md border border-border/80 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  )}
                </div>
              </label>
              <label className="flex gap-3 border border-border/80 rounded-xl p-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  className="mt-1"
                  checked={paymentMethod === 'card'}
                  onChange={() => setPaymentMethod('card')}
                />
                <div className="flex-1">
                  <p className="font-medium text-jewel-dark">
                    Credit / Debit Card
                  </p>
                  <p className="text-text-muted">
                    We support all major Indian and international cards.
                  </p>
                  {paymentMethod === 'card' && (
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="col-span-2 rounded-md border border-border/80 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="rounded-md border border-border/80 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        className="rounded-md border border-border/80 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                      <input
                        type="text"
                        placeholder="Name on Card"
                        className="col-span-2 rounded-md border border-border/80 px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>
                  )}
                </div>
              </label>
            </div>
            <div className="flex justify-between pt-2">
              <Button
                variant="ghost"
                onClick={() => setStep(1)}
              >
                Back to Address
              </Button>
              <Button onClick={() => setStep(3)}>
                Review & Confirm
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="bg-white rounded-2xl border border-border/80 p-4 space-y-4">
            <h2 className="text-sm font-semibold text-jewel-dark">
              Confirm Order
            </h2>
            <p className="text-xs text-text-muted">
              This is a demo checkout. Clicking &quot;Place Order&quot; will
              simulate order placement and take you to the confirmation page.
            </p>
            <ul className="space-y-2 text-xs">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between"
                >
                  <span>
                    {item.name} × {item.qty}
                  </span>
                  <span>₹{item.price * item.qty}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between pt-2">
              <Button
                variant="ghost"
                onClick={() => setStep(2)}
              >
                Back to Payment
              </Button>
              <Button
                onClick={placeOrder}
                loading={loading}
              >
                Place Order
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* Summary */}
      <aside className="bg-white rounded-2xl border border-border/80 p-4 space-y-2 text-xs">
        <h2 className="text-sm font-semibold text-jewel-dark">
          Order Summary
        </h2>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount</span>
          <span>{discount ? `−₹${discount}` : '₹0'}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>{deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}</span>
        </div>
        <hr className="border-border/70" />
        <div className="flex justify-between text-sm font-semibold text-jewel-dark">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
        <p className="text-[11px] text-text-muted pt-2">
          You&apos;ll be redirected to a demo confirmation screen. No real
          payment is processed.
        </p>
      </aside>
    </div>
  );
};

export default CheckoutPage;

