import React from 'react'

import './styles/Header.css'

const Header = () => {
  return (
    <header class="header">
      <div class="header__container">
          <p class="header__logo">Irungaray</p>

          <nav class="header__nav">
              <ol>
                  <li>
                      <a class="header__nav--link" href="#portafolio">Portafolio</a>
                  </li>
                  <li>
                      <a class="header__nav--link" href="#experiencia">Experiencia</a>
                  </li>
                  <li>
                      <a class="header__nav--link" href="#contacto">Trabaja conmigo</a>
                  </li>
              </ol>
          </nav>
      </div>
    </header>
  );
}

export default Header;