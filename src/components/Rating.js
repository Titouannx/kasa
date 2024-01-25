import React from 'react';
import '../styles/Rating.css';

function Rating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    return '★';
  });

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index} className={`star ${index < rating ? 'filled' : 'empty'}`}>{star}</span>
      ))}
    </div>
  );
}

export default Rating;