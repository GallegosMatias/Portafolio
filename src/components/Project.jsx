import React from 'react';
import axios from 'axios';

import './styles/Project.css';

const Project =  () => {
  // const API = 'localhost:1337/projects';

  // try {
  //   const response = await axios.get(API)

  //   console.log(response)
  // } catch (error) {
  //   console.log(error)
  // }



  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio-list-title">Portafolio</h2>

        <article className="portfolio__project">
          <div className="project-details">
            <h3 className="project-title">Industrias Irungaray</h3>
            <h6 className="project-course">HTML / CSS</h6>
            <p className="project-date">
              <small>
                <strong>Fecha: </strong> 12/03/20
              </small>
            </p>
            <p className="project-description">
              Blog que engloba todas las empresas que fundé y administro.
            </p>
            <p className="project-url">
              <small>
                <strong>Podes verlo en:</strong>{' '}
                <a
                  href="https://irungaray.github.io/Industrias-Irungaray/"
                  target="_blank"
                >
                  Industrias Irungaray GH Pages
                </a>
              </small>
            </p>
          </div>

          <figure className="project-imageContainer">
            <img
              className="project-image"
              src="images/industrias.jpg"
              alt="Industrias Irungaray"
              width="600"
              height="300"
            />
          </figure>
        </article>
      </div>
    </section>
  );
};

export default Project;
