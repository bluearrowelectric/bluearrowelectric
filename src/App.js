import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import Main from './components/main';
import Footer from './components/Footer';
import background1 from './assets/images/BAE_BG/1.jpg';
import background2 from './assets/images/BAE_BG/2.jpg';
import background3 from './assets/images/BAE_BG/3.jpg';
import background4 from './assets/images/BAE_BG/4.jpg';
import background5 from './assets/images/BAE_BG/5.jpg';

function App() {
  const backgrounds = [background1, background2, background3, background4, background5];
  const [currentBackground, setCurrentBackground] = useState('');

  useEffect(() => {
    // Select a random background image on component mount
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    setCurrentBackground(backgrounds[randomIndex]);
  }, [backgrounds]);

  return (
    <Router>
     <div
        className="min-h-screen bg-cover bg-center bg-no-repeat fixed w-full transition-all duration-500"
        style={{ backgroundImage: `url(${currentBackground})` }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
