import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Gem,
  Package,
  Users,
  TicketPercent,
  Star,
  ClipboardList,
  LogOut,
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const linkBase =
  'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors';

const AdminSidebar = () => {
  const { logout } = useAuth();

  const links = [
    { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/admin/products', label: 'Products', icon: Gem },
    { to: '/admin/orders', label: 'Orders', icon: Package },
    { to: '/admin/users', label: 'Users', icon: Users },
    { to: '/admin/coupons', label: 'Coupons', icon: TicketPercent },
    { to: '/admin/reviews', label: 'Reviews', icon: Star },
    { to: '/admin/inventory', label: 'Inventory', icon: ClipboardList },
  ];

  return (
    <aside className="w-60 shrink-0 h-screen bg-jewel-dark text-gold-pale flex flex-col">
      <div className="px-4 py-4 border-b border-border/40">
        <div className="font-display text-xl text-gold">✦ Shringar</div>
        <div className="text-xs text-gold-pale/70 mt-1">Admin Panel</div>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1 text-sm">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `${linkBase} ${
                isActive
                  ? 'bg-gold text-jewel-dark'
                  : 'text-gold-pale/85 hover:bg-gold/15'
              }`
            }
          >
            <Icon className="w-4 h-4" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <button
        type="button"
        onClick={logout}
        className="m-3 mb-4 flex items-center justify-center gap-2 rounded-md border border-border/50 px-3 py-2 text-xs text-gold-pale hover:bg-gold/10"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </aside>
  );
};

export default AdminSidebar;

