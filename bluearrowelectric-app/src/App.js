import './App.css';
import { Navbar } from "./components/navbar";
import Main from "./components/main";
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import ContactForm from './pages/form';
import Testimonials from './pages/testimonials';

function App() {
  return (
    <div className="">
<Navbar />
<Main />
<Footer />
    </div>
  );
}

export default App;
