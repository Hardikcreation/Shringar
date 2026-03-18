import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

const HeroBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative rounded-3xl overflow-hidden text-white">
      <video
        src="/images/products/vidoe.mp4"
        className="w-full h-[230px] md:h-[300px] lg:h-[400px] object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-r from-jewel-dark/85 via-jewel-dark/60 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-30 px-4 md:px-8 flex items-center justify-between gap-120 md:gap-40">
          <div className="flex-1 max-w-lg space-y-2 md:space-y-3">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold-light/80">
              Luxury Artificial Jewellery
            </p>
            <h1 className="font-display text-3xl md:text-5xl leading-tight">
              See the shimmer
              <br />
              <span className="text-gold-light">before it arrives</span>
            </h1>
            <p className="text-sm md:text-base text-gold-pale/90">
              Our latest edit of handcrafted pieces, captured in motion so every stone, pearl and polish glows on screen.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate('/jewellery/necklace')}
              >
                Shop Necklaces
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => navigate('/jewellery/earrings')}
              >
                Explore All Products
              </Button>
            </div>
            <div className="flex gap-6 pt-2 text-[11px] md:text-xs text-gold-pale/90">
              <div>
                <p className="font-semibold text-gold-light">Free Shipping</p>
                <p>On all orders above ₹599</p>
              </div>
              <div>
                <p className="font-semibold text-gold-light">7-Day Returns</p>
                <p>Easy returns on eligible items</p>
              </div>
            </div>
          </div>
          {/* <div className="hidden md:flex flex-1 justify-end">
            <div className="relative w-40 h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-gold-pale shadow-gold-soft bg-black/40">
              <img
                src="/images/products/ring.jpg"
                alt="Signature ring"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

