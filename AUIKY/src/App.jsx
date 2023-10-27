import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/Index';
import DetalleApp from './pages/DetalleApp';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/detalles/:id" element={<DetalleApp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
