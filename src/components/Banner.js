import React from 'react';
import '../styles/Banner.css';

function Banner({ txtBanner, classBanner }) {
  return (
    <div className={classBanner}>
      <h2>{txtBanner}</h2>
    </div>
  );
}

export default Banner;