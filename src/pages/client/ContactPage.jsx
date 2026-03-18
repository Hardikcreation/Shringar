import React from 'react';

const ContactPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 grid md:grid-cols-2 gap-6 text-sm">
      <div className="space-y-3">
        <h1 className="font-display text-2xl text-jewel-dark mb-1">
          Contact us
        </h1>
        <p className="text-text-muted text-xs">
          Reach out for order queries, styling help or feedback on this demo.
        </p>
        <form className="space-y-3 text-xs">
          <div>
            <label className="block text-text-muted mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-border/80 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <div>
            <label className="block text-text-muted mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-md border border-border/80 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <div>
            <label className="block text-text-muted mb-1">
              Message
            </label>
            <textarea
              rows="4"
              className="w-full rounded-md border border-border/80 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded-full bg-gold text-jewel-dark text-xs font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="space-y-2 text-xs text-text-muted">
        <h2 className="font-semibold text-jewel-dark text-sm">
          Support hours
        </h2>
        <p>Monday to Saturday, 10:00 AM – 7:00 PM IST</p>
        <h2 className="font-semibold text-jewel-dark text-sm mt-3">
          Demo contact
        </h2>
        <p>Email: care@shringar-demo.com</p>
        <p>Phone: +91 90000 00000</p>
      </div>
    </div>
  );
};

export default ContactPage;

