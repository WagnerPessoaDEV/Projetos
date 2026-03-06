// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Inventory />
      
      <footer className="footer">
        <p>&copy; 2023 MotoSpeed. Todos os direitos reservados.</p>
        <p>Desenvolvido com React & Framer Motion</p>
      </footer>
    </div>
  );
}

export default App;