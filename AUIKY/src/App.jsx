import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import DetalleApp from './pages/DetalleApp';
import Filter from './pages/Filter';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/detalles/:id" element={<DetalleApp />} />    
        <Route path="/Filter" element={<Filter/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
