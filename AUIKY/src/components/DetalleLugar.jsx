import React from 'react';
import '../styles/DetalleApp.css';
import AUIKY from '../assets/LOGO AUIKY.png';

const DetalleLugar = ({ Data }) => {
  const { Nombre, Costos, Descripcion, Horario, Calificaciones, Imagen} = Data;
  return (
    <div className="App">
      <div className="grid">
        <table>
            <tr>
              <td className="a">
                <div>
                  <h2>Nombre:</h2>
                  <p>{Nombre}</p>
                </div>
              </td>
              <td className="b">
                <div>
                  <h2>Horario:</h2>
                  <p>{Horario}</p>
                </div>
              </td>
              <td className="c">
                <div>
                  <h2>Descripción:</h2>
                  <p>{Descripcion}</p>
                </div>
              </td>
              <td className="d">
                <div>
                  <h2>Costos:</h2>
                  <p>{Costos}</p>
                </div>
              </td>
              <td className="e">
                <div>
                  <h2>Calificación:</h2>
                  <p>{Calificaciones}</p>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="5">
                <img className="place-image" src={Imagen} alt="Imagen del lugar" />
              </td>
            </tr>
        </table>
      </div>
      <div className="footer">
        <img className="logo-auiky" src={AUIKY} alt="Auiky Logo" />
        <p>&copy; 2023 Auiky. Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default DetalleLugar;
