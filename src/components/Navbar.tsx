// Navbar.tsx

import React, { useState } from 'react';
import '../styles/Navbar.css'; // Import CSS file for styling

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* Your logo or brand */}
          <img src='nba.png' width={"30px"} height={"50px"}/>
        </div>
        <div className={`navbar-links ${isOpen ? 'show' : ''}`}>
          {/* Navigation links */}
          <a href="#home">Home</a>
        </div>
        <div className="hamburger-menu" onClick={toggleNavbar}>
          {/* Hamburger menu icon */}
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
