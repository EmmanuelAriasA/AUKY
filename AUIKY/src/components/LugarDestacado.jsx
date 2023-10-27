import React, { useState, useEffect } from 'react';
import Slider from "react-slick";

function Carrusel() {
  const [destacados, setDestacados] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/destacados')
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no pudo completarse.');
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data); 
        setDestacados(data)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings}>
        {destacados.map((destacado, index) => (
          <img key={index} src={destacado.Imagen} alt="" />
        ))}
      </Slider>
    </div>
  );
}

export default Carrusel;
