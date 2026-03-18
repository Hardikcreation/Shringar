import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/ui/Button';

const ProfilePage = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState(user?.phone || '');

  return (
    <div className="max-w-10xl mx-auto px-4 py-6 md:py-8 grid md:grid-cols-4 gap-6">
      <aside className="md:col-span-1 bg-white rounded-2xl border border-border/80 p-4 text-xs space-y-2">
        <p className="font-semibold text-jewel-dark mb-1">Account</p>
        <p className="text-text-muted">My Profile</p>
        <p className="text-text-muted">My Orders</p>
        <p className="text-text-muted">Saved Addresses</p>
        <p className="text-text-muted">Wishlist</p>
        <p className="text-text-muted">Change Password</p>
      </aside>
      <section className="md:col-span-3 bg-white rounded-2xl border border-border/80 p-4 text-sm space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gold-pale flex items-center justify-center text-lg font-semibold text-jewel-dark border border-gold/50">
            {name?.[0] || 'P'}
          </div>
          <div>
            <p className="text-sm font-medium text-jewel-dark">My Profile</p>
            <p className="text-xs text-text-muted">
              Update your basic information.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-3 text-xs">
          <div>
            <label className="block text-text-muted mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border border-border/80 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <div>
            <label className="block text-text-muted mb-1">
              Phone
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-md border border-border/80 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <div>
            <label className="block text-text-muted mb-1">
              Email
            </label>
            <input
              type="email"
              value={user?.email || ''}
              readOnly
              className="w-full rounded-md border border-border/80 px-3 py-2 bg-slate-50 text-slate-500"
            />
          </div>
        </div>
        <Button>Save Changes</Button>
      </section>
    </div>
  );
};

export default ProfilePage;

