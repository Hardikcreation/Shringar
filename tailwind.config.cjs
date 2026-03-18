/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#B8860B',
          light: '#FFD700',
          pale: '#FFF8ED',
        },
        jewel: {
          dark: '#1A0F00',
          brown: '#4A2800',
          cream: '#FDFAF5',
        },
        success: '#2E7D32',
        error: '#C62828',
        border: '#E8D5B0',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'gold-soft': '0 18px 45px rgba(184, 134, 11, 0.18)',
      },
      backgroundImage: {
        'hero-gradient':
          'linear-gradient(135deg, #1A0F00 0%, #4A2800 50%, #B8860B 100%)',
        'gold-shimmer':
          'linear-gradient(120deg, rgba(255,255,255,0.1), rgba(255,215,0,0.25), rgba(255,255,255,0.05))',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: 0, transform: 'scale(0.95)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.6s linear infinite',
        'fade-in': 'fadeIn 0.35s ease-out',
        'scale-in': 'scaleIn 0.25s ease-out',
      },
    },
  },
  plugins: [],
};

