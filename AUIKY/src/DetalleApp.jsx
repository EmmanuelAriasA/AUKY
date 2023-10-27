import './ DetalleApp.css';
import React from 'react';
import DetalleLugar from './DetalleLugar';


function DetalleApp() {
  const placeData = {
    name: 'Nombre_lugar',
    address: 'Direccion_lugar',
    hours: 'Horario_lugar',
    rating: 'Calificacion_lugar',
  };

  return (
    <div className="App">
      <h1>Detalles del Lugar</h1>
      <DetalleLugar {...placeData} />
    </div>
  );
}

export default DetalleApp;