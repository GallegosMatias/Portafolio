import React from 'react';

import heroImage from '../assets/hero.jpg';

import './styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <h1 className="hero__container--h1">
          Hola! Soy <strong>Lionel Irungaray</strong> <br /> desarrollador{' '}
          <strong>Frontend</strong> <br /> con <strong>pasión</strong> por la
          tecnología y la enseñanza.
        </h1>

        <img
          src={heroImage}
          className="hero-image"
          width="500"
          height="290"
          alt="Irungaray el Grande"
        />
      </div>
    </div>
  );
};

export default Hero;
