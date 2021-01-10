import React from 'react';

import Modal from './Modal';

import heroImage from '../assets/hero.jpg';

import './styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <Modal />
        <h1 className="hero__container--h1">
          Hola! <br /> Soy <strong>Lionel Irungaray.</strong> <br />
          <p className="container__h1-dev">
            Desarrollador <strong>Frontend</strong> <br />
          </p>
          <p className="container__h1-MERN">
            <strong>MERN </strong>Stack <br />
          </p>
          <strong>Apasionado</strong> por la tecnología y el conocimiento.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
