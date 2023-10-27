import { useState } from 'react'
import './App.css'
import foto1 from './assets/arcos.jpg';
import foto2 from './assets/bicentenario.jpg';
import foto3 from './assets/zenea.jfif';
import SearchBar from './components/SearchBar';
import LugarDestacado from './components/LugarDestacado';

function App() {
  const images = [foto1, foto2, foto3];
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
      <div className='container'>
        <SearchBar onSearch={handleSearch} />
        <ul>
          {searchResults.map(result => (
            <li key={result}>{result}</li>
          ))}
        </ul>
        {/* <LugarDestacado imagenes={images} /> */}
      </div>
    </>
  )
}

export default App
