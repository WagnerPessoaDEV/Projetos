// src/styles/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --cobre: #B87333;
    --cobre-claro: #D4A76A;
    --azul: #0A192F;
    --azul-destaque: #0077B6;
    --cinza: #8892B0;
    --cinza-claro: #E6F1FF;
    --branco: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--azul);
    color: var(--cinza-claro);
    overflow-x: hidden;
  }

  a { text-decoration: none; color: inherit; }
  h1, h2, h3 { color: var(--cobre-claro); }
`;

export default GlobalStyle;