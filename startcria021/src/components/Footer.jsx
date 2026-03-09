// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`background-color: #020c1b; padding: 40px 50px; text-align: center; border-top: 1px solid var(--cobre); p { color: var(--cinza); } span { color: var(--cobre); font-weight: bold; }`;

const Footer = () => (
  <FooterContainer id="contato">
    <p>&copy; 2023 <span>TechCopper</span> - Todos os direitos reservados.</p>
    <p style={{fontSize: '0.9rem', marginTop: '10px'}}>contato@suaempresa.com</p>
  </FooterContainer>
);
export default Footer;