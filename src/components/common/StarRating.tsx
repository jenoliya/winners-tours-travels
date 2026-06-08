import React from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  max?: number;
  size?: number;
  showNumber?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  max = 5,
  size = 14,
  showNumber = false,
}) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.floor(rating) ? "text-secondary fill-secondary" : "text-outline-variant"}
          fill={i < Math.floor(rating) ? "currentColor" : "none"}
        />
      ))}
      {showNumber && (
        <span className="text-xs font-semibold text-on-surface-variant ml-1">{rating.toFixed(1)}</span>
      )}
    </div>
  );
};

export default StarRating;
