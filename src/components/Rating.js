import React from 'react';
import '../styles/Rating.css';

function Rating({ rating }) {
  const stars = new Array(5).fill('★');

  return (
    <div className="rating">
      {stars.map((star, index) => (
        <span key={index} className={`star ${index < rating ? 'filled' : 'empty'}`}>{star}</span>
      ))}
    </div>
  );
}

export default Rating;