import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <Link to="/" className="navbar-logo">
            Mi App
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleNavbar}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={`nav-menu ${isOpen && 'active'}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleNavbar}>
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/acerca-de" className="nav-links" onClick={toggleNavbar}>
              Acerca de
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-links" onClick={toggleNavbar}>
              Contacto
            </Link>
          </li>
          {/* Agrega más elementos según tus necesidades */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
