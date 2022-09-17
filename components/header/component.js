import React, { useState } from "react";
import Image from 'next/image';
import Logo from '../../assets/images/logo-transparent.png';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive((isActive) => !isActive);
  };
  return (
    <header className="banner">
      <nav className="navbar">
        <div className="logo">
          <a href="#"><Image alt="logo" src={Logo} width="300px" height="60px" /></a>
        </div>
        <ul className={`nav-list ${isActive ? 'active' : ''}`} >
          <li className="list-item">
            <a>Home</a>
          </li>
          <li className="list-item">
            <a>Diensten</a>
          </li>
          <li className="list-item">
            <a>Oplossingen</a>
          </li>
          <li className="list-item">
            <a>Ons werk</a>
          </li>
          <li className="list-item">
            <a>Vacatures</a>
          </li>
          <li className="list-item">
            <a>Contact</a>
          </li>
        </ul>
        <div className='menu' onClick={toggleActive}>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
      </nav>

      <div className="content">
        <h1>Je partner in digitale procesoptimalisatie</h1>
        <div className="buttons">
          <button><span></span>Neem contact op</button>
        </div>
      </div>
    </header>
  );
};

export { Header };
