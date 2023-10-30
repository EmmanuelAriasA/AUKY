import React from 'react';

const DetalleLugar = ({ Data }) => {
  const { Nombre, Costos, Descripcion, Horario, Calificaciones, Imagen} = Data;
  return (
    <div className="especificaciones">
      <h2>{Nombre}</h2>
      <p><strong>Costos:</strong> {Costos}</p>
      <p><strong>Descripción:</strong> {Descripcion}</p>
      <p><strong>Horario:</strong> {Horario}</p>
      <p><strong>Calificación:</strong> {Calificaciones}</p>
      <p>{Imagen}</p>
    </div>
  );
};

export default DetalleLugar;
