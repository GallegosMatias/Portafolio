import React from 'react';

import Modal from './Modal';

import heroImage from '../assets/hero.jpg';

import './styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <h1 className="hero__container--h1">
          Hola! Soy <strong>Lionel Irungaray.</strong> <br />
          Desarrollador{' '} <strong>Frontend</strong> <br />
          <strong>MERN </strong>Stack <br />
          <strong>Apasionado</strong> por la tecnología y el conocimiento.
        </h1>

        <Modal />
      </div>
    </div>
  );
};

export default Hero;
