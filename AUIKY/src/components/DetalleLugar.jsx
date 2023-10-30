import React from 'react';

const DetalleLugar = ({ Data }) => {
  const { Nombre, Costos, Descripcion, Horario, Calificaciones, Imagen} = Data;
  return (
    <div className="especificaciones">
      <h2>{Nombre}</h2>
      <p>{Costos}</p>
      <p>{Descripcion}</p>
      <p>{Horario}</p>
      <p>{Calificaciones}</p>
      <p>{Imagen}</p>
    </div>
  );
};

export default DetalleLugar;
