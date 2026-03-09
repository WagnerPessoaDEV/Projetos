// src/components/Navbar.jsx
import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex; justify-content: space-between; align-items: center;
  padding: 20px 50px;
  background: rgba(10, 25, 47, 0.9);
  backdrop-filter: blur(10px);
  position: fixed; width: 100%; top: 0; z-index: 100;
  border-bottom: 1px solid var(--cobre);
`;

const Logo = styled.a`font-size: 1.8rem; font-weight: bold; color: var(--cobre); letter-spacing: 2px;`;
const Menu = styled.div`display: flex; gap: 30px;`;
const MenuItem = styled.a`color: var(--cinza-claro); font-size: 1rem; transition: 0.3s; &:hover { color: var(--cobre); transform: translateY(-2px); }`;

const Navbar = () => (
  <Nav>
    <Logo href="#">StartCria<span style={{color: '#FFF'}}>021</span></Logo>
    <Menu>
      <MenuItem href="#home">Início</MenuItem>
      <MenuItem href="#servicos">Serviços</MenuItem>
      <MenuItem href="#sobre">Sobre</MenuItem>
      <MenuItem href="#contato">Contato</MenuItem>
    </Menu>
  </Nav>
);
export default Navbar;