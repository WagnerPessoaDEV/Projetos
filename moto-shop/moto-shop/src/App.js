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
          </div>

          <div className="footer-links">
            <h4>contato</h4>
            <p>(21) 99001-8557</p>
            <p>@dumotors</p>
          </div>

          <div className="footer-contact">
            <h4>LOCALIZAÇÃO</h4>
            <p>Av. Canal 2, 221</p>
            <p>Bonsucesso - Vila Do João</p>
            <p>Rio de Janeiro - RJ</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span>&copy; 2026 DuMotors. Todos os direitos reservados.</span>
          <p>Desenvolvido por Wagner Pessoa • @StartCria021</p>
        </div>
      </footer>
    </div>
  );
}

export default App;