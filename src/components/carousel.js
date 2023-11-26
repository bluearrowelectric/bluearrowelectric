import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider .slider-iphone-landscape'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {slides.map((slide, index) => (
        <a
          key={index}
          href={slide.link}  // Assuming you have a 'link' property in each slide object
          target="_blank"
          rel="noopener noreferrer"
          className={index === current ? 'slide active' : 'slide'}
        >
          {index === current && (
            <img
              src={slide.image}
              alt='projects'
              className='image image-iphone-landscape hover:scale-110 duration-300'
            />
          )}
        </a>
      ))}
    </section>
  );
};

export default ImageSlider;
