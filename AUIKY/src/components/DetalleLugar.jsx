import React from 'react';

const DetalleLugar = ({ Data }) => {
  const { Nombre, Horario, Calificaciones } = Data;
  return (
    <div className="especificaciones">
      <h2>{Nombre}</h2>
      {/* <p><strong>Dirección:</strong> {address}</p> */}
      <p><strong>Horario:</strong> {Horario}</p>
      <p><strong>Calificación:</strong> {Calificaciones}</p>
    </div>
  );
};

export default DetalleLugar;