import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

const AdminLoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState('admin@demo.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const res = login(email, password);
    setLoading(false);
    if (res.success) {
      navigate('/admin/dashboard', { replace: true });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm">
        <h1 className="font-display text-2xl text-jewel-dark">
          Admin Panel Login
        </h1>
        <p className="text-xs text-slate-500">
          Enter the demo admin credentials to access the dashboard.
        </p>
        <div className="bg-slate-50 rounded-xl p-3 text-[11px] text-slate-700 border border-dashed border-slate-300">
          <p className="font-semibold mb-1">Admin Demo Credentials</p>
          <p>Email: admin@demo.com</p>
          <p>Password: admin123</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-3 text-xs"
        >
          <div>
            <label className="block text-slate-600 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <div>
            <label className="block text-slate-600 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <Button
            type="submit"
            loading={loading}
            className="w-full mt-1"
          >
            Login as Admin
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;

