import { useState } from "react";
import { Star } from "lucide-react";

type StarRatingProps = {
  maxStars?: number;
  onRate?: (rating: number) => void;
};

export const StarRating = ({ maxStars = 5, onRate }: StarRatingProps) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index: number) => {
    setRating(index);
    if (onRate) onRate(index);
  };

  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxStars }, (_, index) => {
        const starIndex = index + 1;
        return (
          <Star
            key={starIndex}
            className={`w-6 h-6 cursor-pointer transition-colors ${starIndex <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
              }`}
            onMouseEnter={() => setHover(starIndex)}
            onMouseLeave={() => setHover(0)}
            onClick={() => handleClick(starIndex)}
            fill={starIndex <= (hover || rating) ? "#facc15" : "none"}
          />
        );
      })}
    </div>
  );
}
