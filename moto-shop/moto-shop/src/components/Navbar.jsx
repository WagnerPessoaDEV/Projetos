// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css'; // Garanta que o CSS está importado no App.js principal

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        MOTO<span>SPEED</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Início</a></li>
        <li><a href="#inventory">Estoque</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#contact">Contato</a></li>
      </ul>
      <div className="menu-icon">
        <i className="fas fa-bars"></i>
      </div>
    </motion.nav>
  );
};

export default Navbar;