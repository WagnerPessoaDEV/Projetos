// src/App.js
import React, { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import IntroVideo from './components/IntroVideo';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [videoEnded, setVideoEnded] = useState(false);
  const handleEnterSite = () => setVideoEnded(true);

  return (
    <>
      <GlobalStyle />
      {!videoEnded ? (
        <IntroVideo onEnd={handleEnterSite} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Services />
          <About />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;