// Loader.jsx
import React from 'react';
import './Loader.css'; // Create this file for styling

const Loader = () => {
  return (
  <div className="dot-loader-container">
      <div className="dot-loader">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h2 className="dot-loader-text">Shrey Shah</h2>
    </div>
  );
};

export default Loader;
