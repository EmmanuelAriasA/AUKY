import React, { useState } from 'react';
import Slider from "react-slick";

function Carrusel({ imagenes }) {
  const images = [imagenes];
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div>
      <Slider {...settings}>
        <button onClick={prevSlide}>Anterior</button>
        <img src={images[currentIndex]} alt={`Imagen ${currentIndex + 1}`} />
        <button onClick={nextSlide}>Siguiente</button>
      </Slider>
    </div>
  );
}

export default Carrusel;
