import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // purely visual demo
    }, 800);
  };

  return (
    <div className="min-h-[70vh] grid md:grid-cols-2 pt-10 px-4 md:px-8">
      <div className="hidden md:flex items-center justify-center relative">
        <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-[40%] overflow-hidden bg-hero-gradient shadow-gold-soft">
          <div className="absolute -inset-10 bg-gold/15 blur-3xl" />
          <img
            src="/images/products/necklace1.png"
            alt="Bridal jewellery"
            className="relative z-10 w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-125"
          />
        </div>
      </div>
      <div className="flex items-center justify-center px-0 md:px-6 py-8 bg-jewel-cream">
        <div className="w-full max-w-sm bg-white/95 backdrop-blur-sm rounded-2xl border border-border/80 p-6 space-y-4 shadow-gold-soft animate-[fadeInUp_0.6s_ease-out]">
          <h1 className="font-display text-2xl text-jewel-dark">
            Create an account
          </h1>
          <p className="text-xs text-text-muted">
            Sign up to save your favourites and track orders.
          </p>
          <form
            onSubmit={handleSubmit}
            className="space-y-3 text-xs"
          >
            <div>
              <label className="block text-text-muted mb-1">
                Full Name
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-border/80 px-3 py-2 bg-jewel-cream/40 focus:outline-none focus:ring-1 focus:ring-gold transition-shadow duration-200 focus:shadow-gold-soft"
              />
            </div>
            <div>
              <label className="block text-text-muted mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-md border border-border/80 px-3 py-2 bg-jewel-cream/40 focus:outline-none focus:ring-1 focus:ring-gold transition-shadow duration-200 focus:shadow-gold-soft"
              />
            </div>
            <div>
              <label className="block text-text-muted mb-1">
                Phone
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-border/80 px-3 py-2 bg-jewel-cream/40 focus:outline-none focus:ring-1 focus:ring-gold transition-shadow duration-200 focus:shadow-gold-soft"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-text-muted mb-1">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-md border border-border/80 px-3 py-2 bg-jewel-cream/40 focus:outline-none focus:ring-1 focus:ring-gold transition-shadow duration-200 focus:shadow-gold-soft"
                />
              </div>
              <div>
                <label className="block text-text-muted mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-md border border-border/80 px-3 py-2 bg-jewel-cream/40 focus:outline-none focus:ring-1 focus:ring-gold transition-shadow duration-200 focus:shadow-gold-soft"
                />
              </div>
            </div>
            <div className="flex items-start gap-2 text-[11px]">
              <input type="checkbox" className="mt-0.5" />
              <p className="text-text-muted">
                I agree to receive offers and updates on WhatsApp and email.
              </p>
            </div>
            <Button
              type="submit"
              loading={loading}
              className="w-full mt-1"
            >
              Create Account
            </Button>
          </form>
          <p className="text-[11px] text-text-muted text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-gold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

