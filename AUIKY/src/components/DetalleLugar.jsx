import React from 'react';
import '../styles/DetalleLugar.css';
import AUIKY from '../assets/LOGO AUIKY.png';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const DetalleLugar = ({ Data }) => {
  const { Nombre, Costos, Descripcion, Horario, Calificaciones, Imagen, Latitud, Longitud } = Data;

  const apiKey = 'AIzaSyCgiG3PUkJi1LXspjPQyBWvxOk18GVcia0';
  const mapContainerStyle = {
    width: '100%',
    height: '300px',
  };

  const center = {
    lat: Latitud,
    lng: Longitud,
  };

  const mapaUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${Latitud},${Longitud}&zoom=15&size=300x200&maptype=roadmap&markers=color:red%7Clabel:Lugar%7C${Latitud},${Longitud}&key=${apiKey}`;

  //const mapaUrl = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCgiG3PUkJi1LXspjPQyBWvxOk18GVcia0&language=es&q=${Latitud},${Longitud}';
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
        <br></br>
        <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
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
