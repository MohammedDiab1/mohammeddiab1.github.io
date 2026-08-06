import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CustomCursor from './components/CustomCursor';
import CV from './components/CV';
import './index.css';

// Initialize Google Analytics
ReactGA.initialize("G-ZRTP8LCG10");

function App() {
  useEffect(() => {
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <Router>
      <div className="App">
        <CustomCursor />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<CV />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
