import React, { useState } from 'react';
import Button from '../../components/ui/Button';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl border border-border/80 p-5 space-y-4">
        <h1 className="font-display text-2xl text-jewel-dark">
          Forgot password
        </h1>
        <p className="text-xs text-text-muted">
          Enter your email address and we&apos;ll send you a reset link
          (simulation only).
        </p>
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
              className="w-full rounded-md border border-border/80 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <Button
            type="submit"
            className="w-full"
          >
            Send Reset Link
          </Button>
        </form>
        {sent && (
          <p className="text-[11px] text-success">
            Check your email for reset link (demo message).
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

