import React from 'react';
import HeroBanner from '../../components/sections/HeroBanner';
import CategoryGrid from '../../components/sections/CategoryGrid';
import FeaturedProducts from '../../components/sections/FeaturedProducts';
import NewArrivals from '../../components/sections/NewArrivals';
import Testimonials from '../../components/sections/Testimonials';

const HomePage = () => {
  return (
    <div className="max-w-10xl mx-auto px-4 py-6 md:py-8">
      <HeroBanner />
      <CategoryGrid />
      <FeaturedProducts />
      <NewArrivals />
      <section className="mt-10 rounded-2xl bg-gold text-jewel-dark px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-xl md:text-2xl">
            Use code <span className="underline">JEWEL10</span> for 10% off
          </h2>
          <p className="text-sm mt-1">
            Applicable on your first order above ₹500. Limited period festive offer.
          </p>
        </div>
        <div className="text-xs md:text-sm font-medium">
          No coupon stacking · T&amp;C apply
        </div>
      </section>
      <Testimonials />
    </div>
  );
};

export default HomePage;

