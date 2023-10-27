import React, { useState } from "react";
import "../styles/Searchbar.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Buscar..."
        />
        <button className="search-button" type="submit">
          Buscar
        </button>
      </form>
    </>
  );
}

export default SearchBar;
