import React, { createContext, useContext, useMemo, useState } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

const DEMO_USER = {
  id: 'u1',
  name: 'Priya Sharma',
  email: 'priya@demo.com',
  phone: '+91 98765 43210',
  role: 'customer',
};

const DEMO_ADMIN = {
  id: 'admin',
  name: 'Admin User',
  email: 'admin@demo.com',
  phone: '+91 90000 00000',
  role: 'admin',
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === 'priya@demo.com' && password === 'demo123') {
      setUser(DEMO_USER);
      toast.success('Welcome back, Priya!');
      return { success: true };
    }
    if (email === 'admin@demo.com' && password === 'admin123') {
      setUser(DEMO_ADMIN);
      toast.success('Logged in as Admin');
      return { success: true };
    }
    toast.error('Invalid credentials. Please use the demo logins.');
    return { success: false };
  };

  const logout = () => {
    setUser(null);
    toast.success('Logged out successfully');
  };

  const value = useMemo(
    () => ({
      user,
      isLoggedIn: !!user,
      isAdmin: user?.role === 'admin',
      login,
      logout,
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

