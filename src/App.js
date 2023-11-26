// App.js

import './App.css';
import { Navbar } from './components/navbar';
import Main from './components/main';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import ContactForm from './pages/form';
import Testimonials from './pages/testimonials';
import background from './assets/images/IMG_1418.jpg';

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat fixed w-full" style={{ backgroundImage: `url(${background})` }}>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
