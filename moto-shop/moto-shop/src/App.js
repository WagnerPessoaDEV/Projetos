// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SellSection from './components/SellSection';
import AboutSection from './components/AboutSection';
import Inventory from './components/Inventory';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <SellSection />
      <AboutSection />
      <Inventory />
      
      <footer className="footer" id="contact">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>DuMotors</h3>
            <p>
              Vem fazer acontecer, vem que vem so na DuMotors tem.
            </p>
            <a className="btn-secondary" href="#inventory">
              Ver estoque
            </a>
          </div>

          <div className="footer-links">
            <h4>Links Uteis</h4>
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#inventory">Estoque</a></li>
              <li><a href="#about">Sobre</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contato</h4>
            <p>Av. Canal 2, 221, Vila do Joao</p>
            <p>(21) 99001-8557</p>
            <p>contato@dumotors.com.br</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 DuMotors. Todos os direitos reservados.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;