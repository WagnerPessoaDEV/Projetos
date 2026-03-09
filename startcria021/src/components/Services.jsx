// src/components/Services.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`padding: 100px 50px; background-color: transparent;`;
const SectionTitle = styled(motion.h2)`text-align: center; font-size: 2.5rem; margin-bottom: 60px; color: var(--cobre-claro);`;
const CardsContainer = styled.div`display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;`;
const Card = styled(motion.div)`background: rgba(255, 255, 255, 0.05); border: 1px solid var(--cobre); border-radius: 8px; padding: 30px; width: 300px; text-align: center; h3 { margin-bottom: 15px; color: var(--cinza-claro); } p { color: var(--cinza); font-size: 0.95rem; line-height: 1.6; }`;

const services = [
  { title: "Criação de Websites", desc: "Sites modernos, responsivos e otimizados para buscadores." },
  { title: "E-commerce", desc: "Lojas virtuais completas e seguras para alavancar suas vendas." },
  { title: "Manutenção de PCs", desc: "Suporte técnico, formatação e upgrade de sistemas." },
  { title: "Consultoria em TI", desc: "Planejamento estratégico para otimizar seu negócio." }
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } };
const itemVariants = { hidden: { y: 50, opacity: 0 }, visible: { y: 0, opacity: 1 } };

const Services = () => (
  <ServicesSection id="servicos">
    <SectionTitle initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
      Nossos Serviços
    </SectionTitle>
    <CardsContainer as={motion.div} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
      {services.map((service, index) => (
        <Card key={index} variants={itemVariants} whileHover={{ scale: 1.05, borderColor: '#FFF', backgroundColor: 'rgba(184, 115, 51, 0.1)' }}>
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </Card>
      ))}
    </CardsContainer>
  </ServicesSection>
);
export default Services;