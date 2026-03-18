import React from 'react';
import StarRating from '../ui/StarRating';

const testimonials = [
  {
    name: 'Priya Sharma',
    product: 'Kundan Bridal Necklace Set',
    rating: 5,
    comment:
      'Shringar made my wedding trousseau complete. The kundan set looked absolutely royal in all my photos.',
  },
  {
    name: 'Rahul Verma',
    product: 'Pearl Jhumka Earrings',
    rating: 4.5,
    comment:
      'I gifted earrings to my sister and mother, both loved the quality and premium packaging.',
  },
  {
    name: 'Meera Iyer',
    product: 'Temple Bharatanatyam Bangles',
    rating: 5,
    comment:
      'The temple bangles were perfect for my Bharatanatyam performance and matched my costume perfectly.',
  },
];

const Testimonials = () => {
  return (
    <section className="mt-10 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-2xl text-jewel-dark">
          What Our Queens Say
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white rounded-2xl border border-border/80 p-4 flex flex-col gap-2"
          >
            <StarRating rating={t.rating} />
            <p className="text-sm text-jewel-dark/90">{t.comment}</p>
            <div className="mt-2 text-xs text-text-muted">
              <p className="font-medium text-jewel-dark">{t.name}</p>
              <p>{t.product}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

