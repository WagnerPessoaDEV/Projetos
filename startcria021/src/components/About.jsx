// src/components/About.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`display: flex; align-items: center; justify-content: center; padding: 100px 50px; background-color: transparent; min-height: 80vh;`;
const ContentWrapper = styled.div`display: flex; max-width: 1200px; gap: 60px; align-items: center; @media (max-width: 768px) { flex-direction: column; text-align: center; }`;
const TextBlock = styled(motion.div)`flex: 1; h2 { font-size: 2.5rem; margin-bottom: 20px; color: var(--cobre); } p { color: var(--cinza); line-height: 1.8; font-size: 1.1rem; }`;
const ImageBlock = styled(motion.div)`flex: 1; height: 400px; background: linear-gradient(135deg, var(--azul-destaque), var(--cobre)); border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; box-shadow: 0 20px 40px rgba(0,0,0,0.3);`;

const About = () => (
  <AboutSection id="sobre">
    <ContentWrapper>
      <TextBlock initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        <h2>Tecnologia com Propósito</h2>
        <p>Somos uma empresa dedicada a transformar ideias em realidade digital. Combinamos a robustez técnica da manutenção de hardware com a criatividade do desenvolvimento web.</p>
      </TextBlock>
      <ImageBlock initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
        Imagem Ilustrativa
      </ImageBlock>
    </ContentWrapper>
  </AboutSection>
);
export default About;