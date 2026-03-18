import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Bell } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import AdminSidebar from './AdminSidebar';

const AdminLayout = () => {
  const { user } = useAuth();
  const location = useLocation();

  const pageTitleMap = {
    '/admin/dashboard': 'Dashboard',
    '/admin/products': 'Products',
    '/admin/products/add': 'Add Product',
    '/admin/orders': 'Orders',
    '/admin/users': 'Users',
    '/admin/coupons': 'Coupons',
    '/admin/reviews': 'Reviews',
    '/admin/inventory': 'Inventory',
  };

  const title =
    pageTitleMap[location.pathname] ||
    'Admin';

  return (
    <div className="min-h-screen flex bg-slate-100">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b bg-white flex items-center justify-between px-6">
          <div>
            <h1 className="text-lg font-display text-jewel-dark">{title}</h1>
            <p className="text-xs text-slate-500">
              Admin overview and configuration
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-50">
              <Bell className="w-4 h-4" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-gold" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-xs font-semibold text-jewel-dark border border-gold/40">
                {user?.name?.[0] || 'A'}
              </div>
              <div className="text-xs">
                <p className="font-medium text-jewel-dark">
                  {user?.name || 'Admin User'}
                </p>
                <p className="text-slate-500">Admin</p>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-100">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;

