import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-border/70 bg-jewel-dark text-gold-pale mt-10">
      <div className="max-w-10xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-display text-xl text-gold mb-2">✦ Shringar</h3>
          <p className="text-gold-pale/80 text-xs leading-relaxed">
            Luxury-inspired artificial jewellery crafted for every celebration.
            Discover earrings, necklaces, bangles, rings and bridal sets that
            feel regal yet effortless.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gold-light text-xs tracking-wide uppercase">
            SHOP
          </h4>
          <ul className="space-y-1.5 text-gold-pale/85">
            <li>
              <Link to="/jewellery/earrings" className="hover:text-gold-light">
                Earrings
              </Link>
            </li>
            <li>
              <Link to="/jewellery/necklace" className="hover:text-gold-light">
                Necklaces
              </Link>
            </li>
            <li>
              <Link to="/jewellery/bangles" className="hover:text-gold-light">
                Bangles
              </Link>
            </li>
            <li>
              <Link to="/jewellery/bridal" className="hover:text-gold-light">
                Bridal Sets
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gold-light text-xs tracking-wide uppercase">
            SUPPORT
          </h4>
          <ul className="space-y-1.5 text-gold-pale/85">
            <li>
              <Link to="/help" className="hover:text-gold-light">
                Help & FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gold-light">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gold-light">
                About Shringar
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-gold-light text-xs tracking-wide uppercase">
            NEWSLETTER
          </h4>
          <p className="text-gold-pale/80 text-xs mb-2">
            Be the first to know about festive drops and bridal collections.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 rounded-md bg-jewel-dark border border-border/70 text-xs focus:outline-none focus:ring-1 focus:ring-gold-light placeholder:text-gold-pale/60"
            />
            <button className="px-3 py-2 rounded-md bg-gold text-jewel-dark text-xs font-medium hover:bg-gold-light transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-gold-pale/70">
          <p>© {new Date().getFullYear()} Shringar. All rights reserved.</p>
          <p>Made for demo purposes · No real orders are processed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

