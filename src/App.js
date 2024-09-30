// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import SelectTimePage from './SelectTimePage';
import Welcome from './Welcome';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/select-time" element={<SelectTimePage />} />
        </Routes>
        <Routes>
        <Route path="/" element={<SelectTimePage />} />
        <Route path="/welcomep" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
