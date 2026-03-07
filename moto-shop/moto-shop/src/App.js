// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SellSection from './components/SellSection';
import Inventory from './components/Inventory';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SellSection />
      <Inventory />
      
      <footer className="footer">
        <p>&copy; 2023 MotoSpeed. Todos os direitos reservados.</p>
        <p>Desenvolvido por Wagner Pessoa</p>
      </footer>
    </div>
  );
}

export default App;