// src/components/Inventory.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import xmax2024Image from '../assets/estoque/xmax-2024.jpg';
import xmax2024Image1 from '../assets/estoque/xmax-2024 (1).jpg';
import xmax2024Image2 from '../assets/estoque/xmax-2024 (2).jpg';
import xmax2024Image3 from '../assets/estoque/xmax-2024 (3).jpg';
import xmax2024Image4 from '../assets/estoque/xmax-2024 (4).jpg';
import xmax2024Image5 from '../assets/estoque/xmax-2024 (5).jpg';

const buildGallery = (seed) => [
  `https://source.unsplash.com/1200x800/?motorcycle,${seed}-1`,
  `https://source.unsplash.com/1200x800/?motorcycle,${seed}-2`,
  `https://source.unsplash.com/1200x800/?motorcycle,${seed}-3`,
  `https://source.unsplash.com/1200x800/?motorcycle,${seed}-4`,
  `https://source.unsplash.com/1200x800/?motorcycle,${seed}-5`,
  `https://source.unsplash.com/1200x800/?motorcycle,${seed}-6`,
];

const xmaxGallery = [
  xmax2024Image,
  xmax2024Image1,
  xmax2024Image2,
  xmax2024Image3,
  xmax2024Image4,
  xmax2024Image5,
];
//motos novas
const newBikes = [
  {
    id: 1,
    name: 'Honda CB 500F',
    year: 2023,
    price: 'R$ 35.900',
    km: '0 km',
    status: 'new',
    image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('cb-500f'),
  },
  {
    id: 2,
    name: 'Kawasaki Ninja 400',
    year: 2023,
    price: 'R$ 38.900',
    km: '0 km',
    status: 'new',
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('ninja-400'),
  },
  {
    id: 3,
    name: 'Yamaha MT-03',
    year: 2024,
    price: 'R$ 34.900',
    km: '0 km',
    status: 'new',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('mt-03'),
  },
  {
    id: 4,
    name: 'Yamaha R15',
    year: 2024,
    price: 'R$ 22.900',
    km: '0 km',
    status: 'new',
    image: 'https://images.unsplash.com/photo-1527719327859-2e7b212d21b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('r15'),
  },
  {
    id: 5,
    name: 'Honda CB 650R',
    year: 2024,
    price: 'R$ 49.900',
    km: '0 km',
    status: 'new',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('cb-650r'),
  },
  {
    id: 6,
    name: 'Kawasaki Z400',
    year: 2024,
    price: 'R$ 33.900',
    km: '0 km',
    status: 'new',
    image: 'https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('z400'),
  },
  {
    id: 7,
    name: 'BMW G 310 R',
    year: 2024,
    price: 'R$ 32.900',
    km: '0 km',
    status: 'new',
    image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('g-310-r'),
  },
  {
    id: 8,
    name: 'Triumph Trident 660',
    year: 2024,
    price: 'R$ 45.900',
    km: '0 km',
    status: 'new',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('trident-660'),
  },
  {
    id: 9,
    name: 'Ducati Scrambler Icon',
    year: 2024,
    price: 'R$ 59.900',
    km: '0 km',
    status: 'new',
    image: 'https://images.unsplash.com/photo-1508973378896-7c9de50d8f4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('scrambler-icon'),
  },
  {
    id: 10,
    name: 'Suzuki GSX-S750',
    year: 2024,
    price: 'R$ 54.900',
    km: '0 km',
    status: 'new',
    image: 'https://images.unsplash.com/photo-1558980394-0d9fd03b1f1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('gsx-s750'),
  },
];
//motos usadas
const usedBikes = [
  {
    id: 1,
    name: 'Xmax 250 Abs',
    year: 2024,
    price: 'R$ 0.00',
    km: '0.000 km',
    status: 'used',
    image: xmax2024Image,
    gallery: xmaxGallery,
  },
  {
    id: 2,
    name: 'Harley Davidson Iron 883',
    year: 2020,
    price: 'R$ 55.000',
    km: '12.000 km',
    status: 'used',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('iron-883'),
  },
  {
    id: 3,
    name: 'Honda CB 500X',
    year: 2021,
    price: 'R$ 34.500',
    km: '18.000 km',
    status: 'used',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('cb-500x'),
  },
  {
    id: 4,
    name: 'Yamaha Fazer 250',
    year: 2019,
    price: 'R$ 17.900',
    km: '24.000 km',
    status: 'used',
    image: 'https://images.unsplash.com/photo-1527719327859-2e7b212d21b9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('fazer-250'),
  },
  {
    id: 5,
    name: 'Kawasaki Versys 650',
    year: 2018,
    price: 'R$ 36.900',
    km: '31.000 km',
    status: 'used',
    image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('versys-650'),
  },
  {
    id: 6,
    name: 'Honda XRE 300',
    year: 2020,
    price: 'R$ 21.500',
    km: '22.000 km',
    status: 'used',
    image: 'https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('xre-300'),
  },
  {
    id: 7,
    name: 'BMW F 750 GS',
    year: 2019,
    price: 'R$ 52.900',
    km: '27.000 km',
    status: 'used',
    image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('f-750-gs'),
  },
  {
    id: 8,
    name: 'Triumph Bonneville T100',
    year: 2017,
    price: 'R$ 41.900',
    km: '35.000 km',
    status: 'used',
    image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('bonneville-t100'),
  },
  {
    id: 9,
    name: 'Royal Enfield Meteor 350',
    year: 2021,
    price: 'R$ 19.900',
    km: '9.000 km',
    status: 'used',
    image: 'https://images.unsplash.com/photo-1508973378896-7c9de50d8f4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('meteor-350'),
  },
  {
    id: 10,
    name: 'Suzuki V-Strom 650',
    year: 2018,
    price: 'R$ 37.900',
    km: '40.000 km',
    status: 'used',
    image: 'https://images.unsplash.com/photo-1558980394-0d9fd03b1f1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    gallery: buildGallery('v-strom-650'),
  },
];

const Inventory = () => {
  const [filter, setFilter] = useState('new');
  const [selectedBike, setSelectedBike] = useState(null);
  const bikesByStatus = {
    new: newBikes,
    used: usedBikes,
  };
  const filteredBikes = bikesByStatus[filter] || [];

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
            key={`${bike.status}-${bike.id}`}
            className="moto-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // Anima apenas uma vez ao entrar na tela
            transition={{ duration: 0.5, delay: 0.1 * bike.id }}
            onClick={() => setSelectedBike(bike)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                setSelectedBike(bike);
              }
            }}
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

      <AnimatePresence>
        {selectedBike && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBike(null)}
          >
            <motion.div
              className="modal"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <h3>{selectedBike.name}</h3>
                  <p>{selectedBike.year} | {selectedBike.km}</p>
                </div>
                <button
                  type="button"
                  className="modal-close"
                  onClick={() => setSelectedBike(null)}
                  aria-label="Fechar"
                >
                  ×
                </button>
              </div>
              <div className="modal-grid">
                {selectedBike.gallery.map((photo, index) => (
                  <div
                    key={`${selectedBike.name}-${index}`}
                    className="modal-thumb"
                    style={{ backgroundImage: `url(${photo})` }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Inventory;