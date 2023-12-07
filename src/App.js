import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';


function App() {
  return (
    <Router>
        {/* Content */}
        <div className="relative z-20">
         
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
         
        </div>
    </Router>
  );
}

export default App;
