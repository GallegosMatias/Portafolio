import React from 'react';
import { Link } from 'react-router-dom';

import OtherProject from '../components/OtherProject';
import Footer from '../components/Footer';

import headerLogo from '../assets/headerLogo.png';

import './styles/OtherProject.css';

const OtherProjects = () => {
  return (
    <>
      <div className="otherProjectsHeader">
        <Link to="/">
          <img src={headerLogo} alt="Irungaray" />
        </Link>
        <h1>
          Acá encontrarás otros proyectos realizados en mi{' '}
          <strong>más temprana etapa de aprendizaje.</strong>
        </h1>
      </div>

      <section className="portfolio">
        <div className="portfolio__container">
          <OtherProject />

          <button className="blueButton">
            <Link to="/">Volver</Link>
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OtherProjects;
