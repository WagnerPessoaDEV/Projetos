// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        A Potência que você <span>Procura</span>
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        As melhores motos novas e usadas com o melhor financiamento do mercado.
      </motion.p>
      
      <motion.a 
        href="#inventory" 
        className="btn-primary"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Ver Estoque
      </motion.a>
    </section>
  );
};

export default Hero;