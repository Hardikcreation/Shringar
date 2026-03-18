import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../components/ui/Button';

const OrderConfirmationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const orderId = id || 'ORD-20240315-001';

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success/10 mb-4">
        <span className="w-8 h-8 rounded-full border-4 border-success border-t-transparent animate-spin-slow" />
      </div>
      <h1 className="font-display text-2xl text-jewel-dark mb-1">
        Order Placed Successfully!
      </h1>
      <p className="text-sm text-text-muted mb-4">
        You&apos;ll receive a confirmation email shortly with your order
        details.
      </p>
      <p className="text-sm font-medium text-jewel-dark mb-4">
        Order ID: <span className="font-mono">#{orderId}</span>
      </p>
      <div className="max-w-md mx-auto bg-white rounded-2xl border border-border/80 p-4 text-left text-xs space-y-1 mb-6">
        <div className="flex justify-between">
          <span>Items</span>
          <span>2</span>
        </div>
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹1,698</span>
        </div>
        <div className="flex justify-between">
          <span>Discount (JEWEL10)</span>
          <span>−₹170</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>FREE</span>
        </div>
        <hr className="border-border/70" />
        <div className="flex justify-between text-sm font-semibold text-jewel-dark">
          <span>Grand Total</span>
          <span>₹1,528</span>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <Button
          variant="secondary"
          onClick={() => navigate('/orders/ORD-20240315-001')}
        >
          Track Order
        </Button>
        <Button onClick={() => navigate('/')}>Continue Shopping</Button>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;

