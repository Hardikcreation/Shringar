import React, { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { useAuth } from '../../context/AuthContext';
import { products } from '../../data/products';

const navLinkClass =
  'px-3 py-1 text-sm font-medium text-jewel-dark/80 hover:text-gold transition-colors';

const Navbar = () => {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { user, isLoggedIn, logout } = useAuth();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    // For demo, navigate to earrings listing with search query
    navigate(`/jewellery/earrings?search=${encodeURIComponent(searchTerm.trim())}`);
    setShowSearch(false);
  };

  const featuredSuggestions = products.slice(0, 4);

  const baseNavLinks = [
    { to: '/', label: 'Home' },
    { to: '/jewellery/earrings', label: 'Earrings' },
    { to: '/jewellery/necklace', label: 'Necklaces' },
    { to: '/jewellery/bangles', label: 'Bangles' },
  ];

  const moreLinks = [
    { to: '/jewellery/rings', label: 'Rings' },
    { to: '/jewellery/anklets', label: 'Anklets' },
    { to: '/jewellery/maang-tikka', label: 'Maang Tikka' },
    { to: '/jewellery/bridal', label: 'Bridal Sets' },
    { to: '/jewellery/nose-pins', label: 'Nose Pins' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="sticky top-0 z-40 bg-jewel-cream/95 backdrop-blur border-b border-border/60">
        <div className="max-w-10xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">
            {/* Left: Logo + mobile menu */}
            <div className="flex items-center gap-3">
              <button
                className="md:hidden inline-flex items-center justify-center p-1.5 rounded-md border border-border text-jewel-dark"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              <Link to="/" className="flex items-baseline gap-2">
                <span className="text-2xl md:text-3xl font-display tracking-[0.2em] text-gold">
                  ✦ Shringar
                </span>
              </Link>
            </div>

            {/* Center nav */}
            <nav className="hidden md:flex items-center gap-2">
              {baseNavLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive: active }) =>
                    `${navLinkClass} ${active ? 'text-gold border-b-2 border-gold pb-2' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="relative">
                <button
                  className={`${navLinkClass} inline-flex items-center gap-1`}
                  type="button"
                  onClick={() => setMoreOpen((open) => !open)}
                >
                  More
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-150 ${
                      moreOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {moreOpen && (
                  <div className="absolute left-0 mt-2 w-44 rounded-lg bg-white shadow-lg border border-border/60 py-2 z-30">
                    {moreLinks.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setMoreOpen(false)}
                        className={({ isActive: active }) =>
                          `block px-4 py-1.5 text-sm text-jewel-dark/80 hover:bg-gold-pale hover:text-gold ${
                            active ? 'text-gold font-semibold' : ''
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Search */}
              <div className="relative">
                <button
                  className="p-1.5 rounded-full border border-border text-jewel-dark hover:text-gold hover:border-gold transition-colors"
                  onClick={() => setShowSearch((s) => !s)}
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
                {showSearch && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-border p-3 animate-scale-in">
                    <form onSubmit={handleSearchSubmit} className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Search className="w-4 h-4 text-gold" />
                        <input
                          type="text"
                          autoFocus
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Search jewellery..."
                          className="flex-1 border-0 focus:ring-0 text-sm placeholder:text-text-muted/70"
                        />
                      </div>
                      <div className="border-t border-border/60 pt-2">
                        <p className="text-[11px] uppercase tracking-wide text-text-muted mb-1">
                          Popular picks
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {featuredSuggestions.map((p) => (
                            <button
                              key={p.id}
                              type="button"
                              onClick={() => navigate(`/product/${p.id}`)}
                              className="px-2 py-0.5 rounded-full bg-gold-pale/70 text-[11px] text-jewel-dark hover:bg-gold-light/60"
                            >
                              {p.name.split(' ').slice(0, 2).join(' ')}
                            </button>
                          ))}
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Wishlist */}
              <Link
                to="/wishlist"
                className="relative p-1.5 rounded-full border border-border text-jewel-dark hover:text-gold hover:border-gold transition-colors"
              >
                <Heart className="w-4 h-4" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[16px] h-4 rounded-full bg-gold text-[10px] text-white flex items-center justify-center px-0.5">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                to="/cart"
                className="relative p-1.5 rounded-full border border-border text-jewel-dark hover:text-gold hover:border-gold transition-colors"
              >
                <ShoppingBag className="w-4 h-4" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 min-w-[16px] h-4 rounded-full bg-gold text-[10px] text-white flex items-center justify-center px-0.5">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Account */}
              <div className="relative">
                <button
                  onClick={() => setAccountOpen((v) => !v)}
                  className="flex items-center gap-1 px-2 py-1.5 rounded-full border border-border text-sm text-jewel-dark hover:border-gold hover:text-gold transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span className="hidden md:inline-block">
                    {isLoggedIn ? user.name.split(' ')[0] : 'Account'}
                  </span>
                  <ChevronDown className="w-3 h-3 hidden md:inline-block" />
                </button>
                {accountOpen && (
                  <div className="absolute right-0 mt-2 w-52 rounded-xl bg-white border border-border shadow-xl animate-scale-in">
                    <div className="px-4 py-3 border-b border-border/60">
                      {isLoggedIn ? (
                        <>
                          <p className="text-xs uppercase text-text-muted tracking-wide">
                            Signed in as
                          </p>
                          <p className="text-sm font-medium text-jewel-dark">
                            {user.name}
                          </p>
                          <p className="text-[11px] text-text-muted truncate">
                            {user.email}
                          </p>
                        </>
                      ) : (
                        <p className="text-sm text-text-muted">
                          Welcome to Shringar
                        </p>
                      )}
                    </div>
                    <div className="py-2">
                      {isLoggedIn ? (
                        <>
                          <Link
                            to="/profile"
                            className="block px-4 py-1.5 text-sm hover:bg-gold-pale"
                          >
                            My Profile
                          </Link>
                          <Link
                            to="/orders"
                            className="block px-4 py-1.5 text-sm hover:bg-gold-pale"
                          >
                            My Orders
                          </Link>
                          <button
                            type="button"
                            onClick={logout}
                            className="w-full text-left px-4 py-1.5 text-sm text-error hover:bg-error/5"
                          >
                            Logout
                          </button>
                        </>
                      ) : (
                        <>
                          <Link
                            to="/login"
                            className="block px-4 py-1.5 text-sm hover:bg-gold-pale"
                          >
                            Login
                          </Link>
                          <Link
                            to="/register"
                            className="block px-4 py-1.5 text-sm hover:bg-gold-pale"
                          >
                            Register
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden border-t border-border">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-2 px-4 py-2 bg-white"
          >
            <Search className="w-4 h-4 text-gold" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search jewellery..."
              className="flex-1 border-0 focus:ring-0 text-sm placeholder:text-text-muted/70"
            />
          </form>
        </div>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="flex-1 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="w-72 max-w-[80%] bg-jewel-dark text-gold-light h-full shadow-2xl animate-scale-in origin-right flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/40">
              <span className="font-display tracking-[0.2em] text-gold-light">
                ✦ Shringar
              </span>
              <button
                className="p-1 rounded-md border border-border/60"
                onClick={() => setMobileOpen(false)}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto scrollbar-thin-gold">
              <div className="px-3 py-4 space-y-1">
                {baseNavLinks.concat(moreLinks).map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive: active }) =>
                      `block px-3 py-2 rounded-md text-sm ${
                        active
                          ? 'bg-gold text-jewel-dark'
                          : 'text-gold-light/90 hover:bg-gold/20'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </nav>
            <div className="border-t border-border/40 px-3 py-3 space-y-2 text-sm">
              {isLoggedIn ? (
                <>
                  <div className="text-xs text-gold-light/80">
                    Signed in as <span className="font-semibold">{user.name}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setMobileOpen(false);
                    }}
                    className="w-full px-3 py-2 rounded-md bg-gold text-jewel-dark font-medium"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full px-3 py-2 rounded-md bg-gold text-center text-jewel-dark font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full px-3 py-2 rounded-md border border-gold text-center text-gold-light"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
            <div className="border-t border-border/40 px-4 py-3 flex items-center justify-between text-xs text-gold-light/70">
              <span>Wishlist: {wishlistCount}</span>
              <span>Cart: {cartCount}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

