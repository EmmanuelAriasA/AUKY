import React from 'react';
import '../styles/DetalleLugar.css';
import AUIKY from '../assets/LOGO AUIKY.png';

const DetalleLugar = ({ Data }) => {
  const { Nombre, Costos, Descripcion, Horario, Calificaciones, Imagen} = Data;
  return (
    <div className="App">
      <div className="grid">
        <div className="a">
          <h2>Nombre:</h2>
          <p>{Nombre}</p>
        </div>
        <div className="b">
          <h2>Horario:</h2>
          <p>{Horario}</p>
        </div>
        <div className="c">
          <h2>Descripción:</h2>
          <p>{Descripcion}</p>
        </div>
        <div className="d">
          <h2>Costos:</h2>
          <p>{Costos}</p>
        </div>
        <div className="e">
          <h2>Calificación:</h2>
          <p>{Calificaciones}</p>
        </div>
        <div className="image" colSpan="5">
          <img className="place-image" src={Imagen} alt="Imagen del lugar" />
        </div>
      </div>
      <div className="footer">
        <img className="logo-auiky" src={AUIKY} alt="Auiky Logo" />
        <p>&copy; 2023 Auiky. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default DetalleLugar;
