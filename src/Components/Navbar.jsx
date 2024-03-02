import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css'; // Import CSS file for styling

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <button className="toggle-button" onClick={toggleMenu}>
        <FontAwesomeIcon icon={showMenu ? faTimes : faBars} />
      </button>
      <div className="navbar-brand">
        <img src="https://png.pngtree.com/element_our/sm/20180301/sm_5a9809e4976e4.jpg" alt="Logo" className="logo" />
        <span className="brand-name">JKLV</span>
      </div>
      <ul className={`nav-menu ${showMenu ? 'show' : ''}`}>
        <li className="nav-item"><a href="./About.jsx"></a>Media</li>
        <li className="nav-item"><a href="./About.jsx">About</a></li>
        <li className="nav-item"><a href="#">Purchase</a></li>
        <li className="nav-item"><a href="#"> Community Tab</a></li>
        <li className="nav-item"><a href="#">Support</a></li>
        <li className="nav-item"><a href="#"></a></li>
      </ul>
    </nav>
  );
  
}

export default Navbar;
