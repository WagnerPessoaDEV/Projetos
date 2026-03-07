// src/components/SellSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import sellImage from '../assets/vender-motos.png';

const SellSection = () => {
  return (
    <section className="sell-section" id="sell">
      <div className="sell-grid">
        <div className="sell-content">
          <div className="sell-eyebrow">Venda sua moto</div>
          <motion.h2
            className="sell-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Facilite a troca pela moto dos seus sonhos
          </motion.h2>
          <motion.p
            className="sell-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Avaliamos sua moto com transparencia e oferecemos um valor justo para
            usar como entrada. Todo o processo e rapido, seguro e sem burocracia.
          </motion.p>
          <ul className="sell-list">
            <li className="sell-item">Avaliacao justa e rapida</li>
            <li className="sell-item">Pagamento a vista</li>
            <li className="sell-item">Sem burocracia</li>
          </ul>
          <motion.a
            href="#contact"
            className="btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Quero vender
          </motion.a>
        </div>
        <div
          className="sell-media"
          style={{ backgroundImage: `url(${sellImage})` }}
          role="presentation"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};

export default SellSection;
