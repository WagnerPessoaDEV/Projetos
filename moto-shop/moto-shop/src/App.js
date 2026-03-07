// src/App.js
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SellSection from './components/SellSection';
import AboutSection from './components/AboutSection';
import Inventory from './components/Inventory';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }
    return window.localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="App">
      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
        }
      />
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

          <div className="footer-contact">
            <h4>contato</h4>
            <div className="contact-list">
              <a
                className="contact-item"
                href="https://wa.me/5521990018557"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 32 32" role="img" focusable="false">
                    <path d="M16.02 4C9.39 4 4 9.18 4 15.56c0 2.55.94 4.93 2.53 6.8L4 28l5.8-2.4a12.23 12.23 0 0 0 6.22 1.69c6.63 0 12.02-5.18 12.02-11.56C28.04 9.18 22.65 4 16.02 4Zm0 20.84c-2.01 0-3.96-.55-5.66-1.58l-.41-.25-3.44 1.43 1.48-3.24-.27-.43a9.8 9.8 0 0 1-1.57-5.21c0-5.09 4.4-9.23 9.87-9.23 5.44 0 9.87 4.14 9.87 9.23 0 5.09-4.43 9.28-9.87 9.28Zm5.77-6.93c-.31-.16-1.84-.9-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.18.2-.37.23-.68.08-.31-.16-1.3-.47-2.47-1.51-.91-.79-1.53-1.77-1.71-2.08-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.67-.97-2.29-.26-.62-.53-.54-.71-.55h-.6c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.16.21 2.1 3.28 5.13 4.46.72.28 1.28.45 1.72.57.72.22 1.37.19 1.88.11.57-.08 1.84-.73 2.1-1.43.26-.7.26-1.31.18-1.43-.08-.12-.29-.2-.6-.36Z" />
                  </svg>
                </span>
                <span>(21) 99001-8557</span>
              </a>
              <a
                className="contact-item"
                href="https://instagram.com/dumotors.rj"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 32 32" role="img" focusable="false">
                    <path d="M21 4H11c-3.86 0-7 3.14-7 7v10c0 3.86 3.14 7 7 7h10c3.86 0 7-3.14 7-7V11c0-3.86-3.14-7-7-7Zm5 17c0 2.76-2.24 5-5 5H11c-2.76 0-5-2.24-5-5V11c0-2.76 2.24-5 5-5h10c2.76 0 5 2.24 5 5v10ZM16 10.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Zm5.75-9.88a1.12 1.12 0 1 0 0 2.24 1.12 1.12 0 0 0 0-2.24Z" />
                  </svg>
                </span>
                <span>@dumotors.rj</span>
              </a>
              <a
                className="contact-item"
                href="https://www.tiktok.com/@dumotors.rj"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 32 32" role="img" focusable="false">
                    <path d="M22.4 5c.7 2.3 2.5 4.1 4.8 4.8v4a10.1 10.1 0 0 1-4.8-1.5v8.2c0 4.6-3.7 8.4-8.4 8.4a8.4 8.4 0 0 1 0-16.8c.5 0 1 .05 1.5.14v4.2a4.4 4.4 0 1 0 3.4 4.3V5h3.5Z" />
                  </svg>
                </span>
                <span>@dumotors.rj</span>
              </a>
              <a
                className="contact-item"
                href="https://facebook.com/dumotors.rj"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 32 32" role="img" focusable="false">
                    <path d="M18.2 11.2V9.5c0-.8.5-1 1.1-1h2.1V5h-2.8c-3.2 0-4.9 1.9-4.9 4.9v1.3h-2.4v3.6h2.4V27h3.9V14.8h2.9l.4-3.6h-3.3Z" />
                  </svg>
                </span>
                <span>/dumotors.rj</span>
              </a>
              <a className="contact-item" href="mailto:contato@dumotors.com.br">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 32 32" role="img" focusable="false">
                    <path d="M26 6H6c-1.65 0-3 1.35-3 3v14c0 1.65 1.35 3 3 3h20c1.65 0 3-1.35 3-3V9c0-1.65-1.35-3-3-3Zm0 4.07-9.36 5.85c-.4.25-.9.25-1.3 0L6 10.07V9l10 6.25L26 9v1.07Z" />
                  </svg>
                </span>
                <span>contato@dumotors.com.br</span>
              </a>
            </div>
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
          <p>Desenvolvido por Wagner Pessoa • StartCria021</p>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href="https://wa.me/5521990018557"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <span className="whatsapp-icon" aria-hidden="true">
          <svg viewBox="0 0 32 32" role="img" focusable="false">
            <path d="M16.02 4C9.39 4 4 9.18 4 15.56c0 2.55.94 4.93 2.53 6.8L4 28l5.8-2.4a12.23 12.23 0 0 0 6.22 1.69c6.63 0 12.02-5.18 12.02-11.56C28.04 9.18 22.65 4 16.02 4Zm0 20.84c-2.01 0-3.96-.55-5.66-1.58l-.41-.25-3.44 1.43 1.48-3.24-.27-.43a9.8 9.8 0 0 1-1.57-5.21c0-5.09 4.4-9.23 9.87-9.23 5.44 0 9.87 4.14 9.87 9.23 0 5.09-4.43 9.28-9.87 9.28Zm5.77-6.93c-.31-.16-1.84-.9-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.18.2-.37.23-.68.08-.31-.16-1.3-.47-2.47-1.51-.91-.79-1.53-1.77-1.71-2.08-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.67-.97-2.29-.26-.62-.53-.54-.71-.55h-.6c-.2 0-.52.08-.79.39-.27.31-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.16.21 2.1 3.28 5.13 4.46.72.28 1.28.45 1.72.57.72.22 1.37.19 1.88.11.57-.08 1.84-.73 2.1-1.43.26-.7.26-1.31.18-1.43-.08-.12-.29-.2-.6-.36Z" />
          </svg>
        </span>
      </a>
    </div>
  );
}

export default App;