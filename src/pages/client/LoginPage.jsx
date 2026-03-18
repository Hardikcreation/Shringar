import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('priya@demo.com');
  const [password, setPassword] = useState('demo123');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const res = login(email, password);
    setLoading(false);
    if (res.success) {
      const from =
        (location.state && location.state.from) || '/';
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="min-h-[70vh] grid md:grid-cols-2 pt-10 px-4 md:px-8">
      <div className="hidden md:block bg-hero-gradient">
        <div className="h-full flex items-center justify-center">
          <div className="relative w-3/4 max-w-md aspect-square rounded-full overflow-hidden border-4 border-gold-pale shadow-gold-soft">
            <img
              src="/images/products/ring6.jpg"
              alt="Jewellery highlight"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center px-0 md:px-6 py-8 bg-jewel-cream">
        <div className="w-full max-w-sm bg-white/95 backdrop-blur-sm rounded-2xl border border-border/80 p-6 space-y-4 shadow-gold-soft animate-[fadeInUp_0.6s_ease-out]">
          <h1 className="font-display text-2xl text-jewel-dark">
            Welcome back
          </h1>
          <p className="text-xs text-text-muted">
            Login with demo credentials to explore the experience.
          </p>
          <div className="bg-gold-pale rounded-xl p-3 text-[11px] text-jewel-dark">
            <p className="font-semibold mb-1">Customer Login</p>
            <p>Email: priya@demo.com</p>
            <p>Password: demo123</p>
            <p className="font-semibold mt-2">Admin Login</p>
            <p>Email: admin@demo.com</p>
            <p>Password: admin123</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-3 text-xs"
          >
            <div>
              <label className="block text-text-muted mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-border/80 px-3 py-2 bg-jewel-cream/40 focus:outline-none focus:ring-1 focus:ring-gold transition-shadow duration-200 focus:shadow-gold-soft"
              />
            </div>
            <div>
              <label className="block text-text-muted mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-border/80 px-3 py-2 bg-jewel-cream/40 focus:outline-none focus:ring-1 focus:ring-gold transition-shadow duration-200 focus:shadow-gold-soft"
              />
            </div>
            <div className="flex items-center justify-between">
              <Link
                to="/forgot-password"
                className="text-[11px] text-gold"
              >
                Forgot Password?
              </Link>
            </div>
            <Button
              type="submit"
              loading={loading}
              className="w-full mt-1"
            >
              Login
            </Button>
          </form>
          <p className="text-[11px] text-text-muted text-center">
            Don&apos;t have an account?{' '}
            <Link to="/register" className="text-gold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

