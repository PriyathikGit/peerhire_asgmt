import { useState } from 'react';

function RatingSystem({ averageRating, totalRatings, onRate }) {
    const [hoverRating, setHoverRating] = useState(0);

    return (
        <div>
            <div className="flex items-center mb-2">
                <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            className={`text-2xl focus:outline-none ${star <= (hoverRating || averageRating) ? 'text-yellow-500' : 'text-gray-400'}`}
                            onClick={() => onRate(star)}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                        >
                            ★
                        </button>
                    ))}
                </div>
                <span className="ml-2 text-gray-600 dark:text-gray-300">
                    {averageRating.toFixed(1)} ({totalRatings} ratings)
                </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                Click to rate this freelancer
            </p>
        </div>
    );
}

export default RatingSystem;