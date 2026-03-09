// src/components/Hero.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; background: transparent; padding: 0 20px;`;
const Title = styled(motion.h1)`font-size: 4rem; margin-bottom: 20px; @media (max-width: 768px) { font-size: 2.5rem; }`;
const Subtitle = styled(motion.p)`font-size: 1.5rem; color: var(--cinza); margin-bottom: 40px; max-width: 600px;`;
const CTAButton = styled(motion.button)`padding: 15px 40px; font-size: 1.2rem; background-color: var(--cobre); color: var(--azul); border: none; border-radius: 4px; cursor: pointer; font-weight: bold;`;

const Hero = () => (
  <HeroSection id="home">
    <Title initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      Inovação em <span style={{ color: 'var(--azul-destaque)' }}>Todo Momento</span>
    </Title>
    <Subtitle initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
      Desenvolvimento de Websites, E-commerce e Manutenção Técnica especializada.
    </Subtitle>
    <CTAButton whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(184, 115, 51, 0.5)" }} whileTap={{ scale: 0.9 }}>
      Fale Conosco
    </CTAButton>
  </HeroSection>
);
export default Hero;