// src/components/Inventory.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Dados simulados de motos
const bikes = [
  { id: 1, name: 'Honda CB 500F', year: 2023, price: 'R$ 35.900', km: '0 km', status: 'new', image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { id: 2, name: 'Yamaha MT-07', year: 2022, price: 'R$ 42.500', km: '5.200 km', status: 'used', image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { id: 3, name: 'Kawasaki Ninja 400', year: 2023, price: 'R$ 38.900', km: '0 km', status: 'new', image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { id: 4, name: 'Harley Davidson Iron 883', year: 2020, price: 'R$ 55.000', km: '12.000 km', status: 'used', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
];

const Inventory = () => {
  const [filter, setFilter] = useState('new');
  const filteredBikes = bikes.filter((bike) => bike.status === filter);

  return (
    <section className="inventory-section" id="inventory">
      <h2 className="section-title">Nosso Estoque</h2>

      <div className="inventory-filters" role="tablist" aria-label="Filtrar estoque">
        <button
          type="button"
          className={`filter-btn ${filter === 'new' ? 'active' : ''}`}
          onClick={() => setFilter('new')}
          aria-pressed={filter === 'new'}
        >
          Motos Novas
        </button>
        <button
          type="button"
          className={`filter-btn ${filter === 'used' ? 'active' : ''}`}
          onClick={() => setFilter('used')}
          aria-pressed={filter === 'used'}
        >
          Motos Usadas
        </button>
      </div>

      <div className="inventory-grid">
        {filteredBikes.map((bike) => (
          <motion.div 
            key={bike.id} 
            className="moto-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Anima apenas uma vez ao entrar na tela
            transition={{ duration: 0.5, delay: 0.1 * bike.id }}
          >
            <div className="moto-image" style={{ backgroundImage: `url(${bike.image})` }}>
              <span className={`tag ${bike.status}`}>
                {bike.status === 'new' ? 'Nova' : 'Usada'}
              </span>
            </div>
            <div className="moto-info">
              <h3>{bike.name}</h3>
              <p>{bike.year} | {bike.km}</p>
              <div className="price">{bike.price}</div>
              <motion.button 
                className="btn-primary" 
                style={{ width: '100%', marginTop: '15px', fontSize: '1rem' }}
                whileHover={{ scale: 1.02 }}
              >
                Tenho Interesse
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Inventory;