import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating = 0, size = 14, showCount = false, count }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, index) => {
          const isFull = index < fullStars;
          const isHalf = index === fullStars && hasHalfStar;
          return (
            <span key={index} className="relative inline-flex">
              <Star
                className="text-gold-light"
                style={{ width: size, height: size }}
                fill={isFull ? '#FFD700' : 'none'}
              />
              {isHalf && (
                <Star
                  className="absolute left-0 top-0 text-gold-light"
                  style={{ width: size, height: size, clipPath: 'inset(0 50% 0 0)' }}
                  fill="#FFD700"
                />
              )}
            </span>
          );
        })}
      </div>
      <span className="text-xs text-text-muted">
        {rating.toFixed(1)}
        {showCount && typeof count === 'number' && ` (${count})`}
      </span>
    </div>
  );
};

export default StarRating;

