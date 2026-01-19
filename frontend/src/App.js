import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import XiAn from './pages/XiAn';

function App() {
  console.log('=== APP WORKING CORRECTLY ===');
  
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#FFF8F0',
      border: '3px solid green'  // Green border so we know it's rendering
    }}>
      <Router>  {/* REMOVED the basename - this was the problem! */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/xian" element={<XiAn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;