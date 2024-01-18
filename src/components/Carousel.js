import React, { useState } from 'react';
import '../styles/Carousel.css';

function Carousel({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);
  
    const goToPrevSlide = () => {
      let newIndex = activeIndex - 1;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      }
      setActiveIndex(newIndex);
    };
  
    const goToNextSlide = () => {
      setActiveIndex((activeIndex + 1) % images.length);
    };
  
    return (
      <div className="carousel-container">
        <div className="carousel-wrapper">
        <button className="prev" onClick={goToPrevSlide} aria-label="Previous slide"></button>
          <div className="carousel-content-wrapper">
            <div 
              className="carousel-content" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img src={image} alt={`Slide ${index}`} key={index} className="carousel-image" />
              ))}
            </div>
          </div>
          <div className="counter">
            {`${activeIndex + 1}/${images.length}`}
          </div>
          <button className="next" onClick={goToNextSlide} aria-label="Next slide"></button>
        </div>
      </div>
    );
  }
  
  export default Carousel;