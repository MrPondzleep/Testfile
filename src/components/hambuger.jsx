import React, { useState } from 'react';
import './hamburger.css';

function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <div className="Street-food">
        <p>Street food</p>
      <div className={`hamburger-menu ${menuOpen ? 'open' : ''}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="menu-items">
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
      </div>
    );
  }
  
  export default HamburgerMenu;