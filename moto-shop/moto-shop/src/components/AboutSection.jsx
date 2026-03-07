// src/components/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="about-eyebrow">Nossa historia</p>
          <h2>Mais de 15 anos conectando voce a sua proxima moto</h2>
          <p>
            Vindos de uma família humilde, construímos nossa história com muito trabalho, fé e perseverança. Tudo começou de forma simples, com pequenos trabalhos e muita vontade de vencer. Ao longo da caminhada, enfrentamos desafios, aproveitamos oportunidades e aprendemos o valor da luta diária.

Com dedicação, parceria e visão empreendedora, transformamos esforço em crescimento. Foi assim que nasceu a DUMOTORS, em 2015, fruto de um sonho construído com coragem, responsabilidade e amor pela família.

Nossa trajetória passou pelas motos, reformas, vendas, locações e, depois, pelos carros — sempre sem esquecer nossa essência e nossas raízes. Mais do que uma empresa, a DUMOTORS representa superação, gratidão a Deus e a certeza de que é possível começar com pouco e conquistar muito.

Trabalho, fé, família e determinação são os pilares da nossa história.
          </p>
          <div className="about-highlights">
            <div>
              <span>+3.500</span>
              <small>Motos vendidas</small>
            </div>
            <div>
              <span>100%</span>
              <small>Clientes satisfeitos</small>
            </div>
            <div>
              <span>24h</span>
              <small>Online</small>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="about-panel"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3>Por que escolher a DuMotors?</h3>
          <ul>
            <li>Inspeção completa e revisao antes da entrega.</li>
            <li>Equipe especializada em financiamento e consorcio.</li>
            <li>Negociacao simples com opção de troca.</li>
            <li>Suporte dedicado no pos-venda.</li>
          </ul>
          <button type="button" className="btn-primary">
            Falar com um especialista
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
