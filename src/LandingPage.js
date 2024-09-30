// src/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='App'>
    <div className="header">
      <h1>Welcome to Daily Quotes</h1>
      <p>By William Marrion Branham</p>
      </div>

      <div className='footer'>
        <Link to="/select-time">
        <button>GET STARTED</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
