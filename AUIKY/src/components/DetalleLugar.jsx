import React from 'react';

const DetalleLugar = ({ name, address, hours, rating }) => {
  return (
    <div className="especificaciones">
      <h2>{name}</h2>
      <p><strong>Dirección:</strong> {address}</p>
      <p><strong>Horario:</strong> {hours}</p>
      <p><strong>Calificación:</strong> {rating}</p>
    </div>
  );
};

export default DetalleLugar;