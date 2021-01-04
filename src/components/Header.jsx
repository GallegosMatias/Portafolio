import React from 'react';

import headerLogo from '../assets/headerLogo.png';

import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <img src={headerLogo} alt="Irungaray" />

        <nav className="header__nav">
          <ol>
            <li>
              <a className="header__nav--link" href="#portafolio">
                Portafolio
              </a>
            </li>
            <li>
              <a className="header__nav--link" href="#experiencia">
                Experiencia
              </a>
            </li>
            <li>
              <a className="header__nav--link" href="#contacto">
                Trabaja conmigo
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
};

export default Header;
