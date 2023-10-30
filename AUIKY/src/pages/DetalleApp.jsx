import '../styles/DetalleApp.css';
import React, { useState, useEffect } from 'react';
import DetalleLugar from '../components/DetalleLugar';
import { useParams } from 'react-router-dom';

function DetalleApp() {
  const [placeData, setPlaceData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/getLuagresById/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no pudo completarse.');
        }
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        setPlaceData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="App">
      <DetalleLugar Data={placeData} />
    </div>
  );
}

export default DetalleApp;
