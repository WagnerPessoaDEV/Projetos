// src/components/IntroVideo.jsx
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const VideoContainer = styled.div`
  width: 100vw; height: 100vh;
  background-color: #000;
  display: flex; justify-content: center; align-items: center;
  position: fixed; top: 0; left: 0; z-index: 9999;
`;

const StyledVideo = styled.video`
  width: 100%; height: 100%;
  object-fit: cover;
`;

const SkipButton = styled(motion.button)`
  position: absolute; bottom: 40px; right: 40px;
  padding: 10px 25px;
  background: transparent;
  border: 1px solid var(--cobre);
  color: var(--cobre);
  font-size: 1rem; cursor: pointer;
  &:hover { background: var(--cobre); color: var(--azul); }
`;

const IntroVideo = ({ onEnd }) => {
  return (
    <VideoContainer>
      {/* IMPORTANTE: Coloque seu video na pasta public com o nome intro.mp4 */}
      <StyledVideo autoPlay muted onEnded={onEnd}>
        <source src="intro.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </StyledVideo>
      <SkipButton onClick={onEnd} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        Pular Introdução
      </SkipButton>
    </VideoContainer>
  );
};
export default IntroVideo;