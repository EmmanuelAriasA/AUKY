import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from '../assets/LOGO AUIKY.png';
import SearchBar from '../components/SearchBar';
import LugarDestacado from '../components/LugarDestacado';

function Index() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/lugares')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('La solicitud no pudo completarse.');
                }
                return response.json();
            })
            .then((data) => {
                // console.log(data);
                setData(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (query) => {
        // Aquí puedes llamar a una API, filtrar datos locales, etc.
        // Por simplicidad, supongamos que tienes un array de datos y filtrarás por coincidencia:
        const data = ['item1', 'item2', 'item3', 'item4'];
        const results = data.filter(item => item.includes(query));
        setSearchResults(results);
    };
    return (
        <>
            <header className='container'>
                <img src={Logo} alt="Logo" />
                <div>
                    <SearchBar onSearch={handleSearch} />
                    {/* <ul>
                        {searchResults.map(result => (
                            <li key={result}>{result}</li>
                        ))}
                    </ul> */}
                </div>
            </header>
            <div className="container">
                <LugarDestacado />
                <div className='lugares'>
                    {data.map((lugar, index) => (
                        <Link to={`/detalles/${lugar.ID}`} key={lugar.ID}>
                            <div className='lugar'>
                                {/* <div className='container'> */}
                                <h2>{lugar.Nombre}</h2>
                                <img src={lugar.Imagen} alt="Imagen" className='lugar-img' />
                                <p>{lugar.Descripcion}</p>
                                {/* </div> */}
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </>
    );
}

export default Index;