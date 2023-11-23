// Importa React y otros módulos necesarios
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchBar from '../components/SearchBar';
import Logo from '../assets/LOGO AUIKY.png';
import "../styles/Filter.css";


function Filter() {

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
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const specificCategories = ["Café", "Monumento", "Atracción", "Restaurante", "Bar", "Familiar", "Petfriendly"];

  const filterByCategories = (lugar) => {
    if (selectedCategories.length === 0) {
      return true;
    } else {
      return selectedCategories.some(category => lugar.Etiqueta.includes(category));
    }
  };

  const handleCheckboxChange = (category) => {

    if (selectedCategories.includes(category)) {
      const updatedCategories = selectedCategories.filter(cat => cat !== category);
      setSelectedCategories(updatedCategories);
      updateSearchResults(updatedCategories);
    } else {
      const updatedCategories = [...selectedCategories, category];
      setSelectedCategories(updatedCategories);
      updateSearchResults(updatedCategories);
    }
  };

  const updateSearchResults = (categories) => {
    const results = data.filter(
      (lugar) =>
        categories.length === 0 || 
        categories.some(category => lugar.Etiqueta.includes(category))
    );
    setSearchResults(results);
  };

  const handleSearch = (query) => {
    const results = data.filter(
      (lugar) =>
        (lugar.Etiqueta.toLowerCase().includes(query.toLowerCase()) ||
        lugar.Nombre.toLowerCase().includes(query.toLowerCase())) &&
        filterByCategories(lugar)
    );
    setSearchResults(results);
  };

  const handleSearchInputChange = (query) => {
    handleSearch(query);
  };

  const lugaresToDisplay = searchResults.length > 0 ? searchResults : data;

  return (
    <>
      <header className="container">
        <img src={Logo} alt="Logo" />
        <div>
          <SearchBar onSearch={handleSearchInputChange} />
          <div className="categories-container">
            <div className="categories-checkboxes">
              {specificCategories.map((category) => (
                <div key={category} className="category-checkbox">
                  <input
                    type="checkbox"
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCheckboxChange(category)}
                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="lugares">
          {lugaresToDisplay.map((lugar, index) => (
            <Link
              to={`/detalles/${lugar.ID}`}
              key={lugar.ID}
            >
              <div className="lugar">
                <h2>{lugar.Nombre}</h2>
                <img src={lugar.Imagen} alt="Imagen" className="lugar-img" />
                <p>{lugar.Descripcion}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
  }

export default Filter;
