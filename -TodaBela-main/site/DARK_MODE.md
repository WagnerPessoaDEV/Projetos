# 🌙 Versão Escura - Toda Bela

## Mudanças Implementadas

A versão escura do site foi aprimorada para oferecer uma melhor experiência visual com contraste adequado e cores harmoniosas.

### 🎨 Melhorias nas Cores do Dark Mode

#### Variáveis CSS Otimizadas:

- **Cor Primária**: Alterada para `#f0f0f0` (cinza claro) para melhor legibilidade
- **Fundo Principal**: `#0a0a0a` para um preto puro e elegante
- **Roxo Secundário**: Ajustado para `#bb86fc` (roxo mais vibrante e contrastante)
- **Cards e Elementos**: Fundo em `#1a1a1a` com sombras aprimoradas

#### Degradientes Aperfeiçoados:
```css
--bg-body: linear-gradient(135deg, #0a0a0a 0%, #150a1a 100%)
--bg-section-white: linear-gradient(180deg, #161616 0%, #1f1a2a 100%)
--bg-section-gray: linear-gradient(180deg, #0f0f0f 0%, #0a0510 100%)
```

### ✨ Estilos Específicos Adicionados

1. **Cards de Produtos**: Borders ajustadas para `#333` no dark mode
2. **Cards de Serviços**: Sombras mais pronunciadas (`rgba(0,0,0,0.5)`)
3. **Carrinho Lateral**: Estilo otimizado com borders em `#333`
4. **Galeria**: Sombras aprofundadas para melhor profundidade
5. **Navegação Mobile**: Sombras otimizadas para dark mode
6. **Títulos (h1, h2, h3)**: Cor garantida em `#f0f0f0`

### 🚀 Como Usar

A versão escura é ativada automáticamente quando o usuário clica no botão **🌙** (tema) localizado no canto superior direito da página.

**Recursos:**
- ✅ Modo automático: Lembra da preferência do usuário no `localStorage`
- ✅ Transição suave: Mudança entre temas com transição de 0.3s
- ✅ Ícone adaptativo: Mostra 🌙 para ativar dark mode e ☀️ para deativar

### 📱 Compatibilidade

- ✅ Totalmente responsivo em todos os dispositivos
- ✅ Acessibilidade mantida com contraste WCAG AA
- ✅ Funciona em navegadores modernos (Chrome, Firefox, Safari, Edge)

### 🔧 Arquivos Modificados

- **style.css**: Variáveis CSS otimizadas e estilos específicos adicionados
- **Sem alterações**: index.html e script.js (funcionam perfeitamente com as mudanças CSS)

### 💡 Próximas Melhorias (Optativas)

Se desejar ainda mais personalização:
- Adicionar tema "seguir sistema" (detecta preferência do SO)
- Criar temas adicionais (azul, verde, vermelho)
- Salvamento de preferências em mais profundidade

---

**Data de Implementação:** 16 de fevereiro de 2026

Aproveite a sua versão escura! 🌟
