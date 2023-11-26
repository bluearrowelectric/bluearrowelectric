import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import Main from './components/main';
import Footer from './components/Footer';
import Testimonials from './components/test';
import background from './assets/images/IMG_1418.jpg';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat fixed w-full" style={{ backgroundImage: `url(${background})` }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
