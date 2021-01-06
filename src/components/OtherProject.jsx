import React from 'react';

import calculadora from '../assets/otherProjects/calculadora.png';
import faceDetection from '../assets/otherProjects/faceDetection.png';
import industrias from '../assets/otherProjects/industrias.jpg';
import lavadero from '../assets/otherProjects/lavadero.png';
import metalurgica from '../assets/otherProjects/metalurgica.jpg';
import rym from '../assets/otherProjects/rym.jpg';

const OtherProject = () => {
  return (
    <>
      <article class="portfolio__project">
        <div class="project-details">
          <h3 class="project-title">Industrias Irungaray</h3>
          <h6 class="project-course">HTML / CSS</h6>
          <p class="project-date">
            <small>
              <strong>Fecha: </strong> 12/03/20
            </small>
          </p>
          <p class="project-description">
            Blog que engloba todas las empresas que fundé y administro.
          </p>
          <p class="project-url">
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

        <figure class="project-imageContainer">
          <img
            class="project-image"
            src={industrias}
            alt="Industrias Irungaray"
            width="600"
            height="300"
          />
        </figure>
      </article>

      <article class="portfolio__project">
        <div class="project-details">
          <h3 class="project-title">Lavadero Fairlane</h3>
          <h6 class="project-course">HTML / CSS / JS</h6>
          <p class="project-date">
            <small>
              <strong>Fecha: </strong> 1/04/20
            </small>
          </p>
          <p class="project-description">
            Pagina Oficial de Lavadero Fairlane.
          </p>
          <p class="project-url">
            <small>
              <strong>Podes verlo en:</strong>{' '}
              <a
                href="https://irungaray.github.io/Lavadero-Fairlane/"
                target="_blank"
              >
                Lavadero Fairlane GH Pages
              </a>
            </small>
          </p>
        </div>

        <figure class="project-imageContainer">
          <img
            class="project-image"
            src={lavadero}
            alt="Lavadero Fairlane"
            width="600"
            height="300"
          />
        </figure>
      </article>


<article class="portfolio__project">

<div class="project-details">
    <h3 class="project-title">Face Detection</h3>
<h6 class="project-course">JavaScript</h6>
<p class="project-date"><small><strong>Fecha: 21/05/20 </strong></small></p>
<p class="project-description">Sistema de reconocimiento facial basado en face-api.js. Detecta emociones, edad y sexo. </p>
<p class="project-url"><small><strong>Podes verlo en:</strong> <a href="https://irungaray.github.io/Face-Detection/" target="_blank">Face Detection GH Pages</a></small></p>
</div>

<figure class="project-imageContainer">
    <img class="project-image" src={faceDetection} alt="Face Detection" width="600" height="300" />
</figure>
</article>

<article class="portfolio__project">

<div class="project-details">
    <h3 class="project-title">Metalúrgica Irungaray</h3>
<h6 class="project-course">HTML / CSS</h6>
<p class="project-date"><small><strong>Fecha: 13/10/19 </strong></small></p>
<p class="project-description">Página oficial de Metalúrgica Irungaray </p>
<p class="project-url"><small><strong>Podes verlo en:</strong> <a href="gallegosmatias.github.io/metalurgica/" target="_blank">Metalúrgica Irungaray GH Pages</a></small></p>
</div>

<figure class="project-imageContainer">
    <img class="project-image" src={metalurgica} alt="Metalúrgica Irungaray" width="600" height="300" />
</figure>
</article>

<article class="portfolio__project">

<div class="project-details">
    <h3 class="project-title">Calculadora de Porcentaje</h3>
<h6 class="project-course">HTML / CSS / JS</h6>
<p class="project-date"><small><strong>Fecha: 13/10/19 </strong></small></p>
<p class="project-description">Simple calculadora de porcentaje hecha en JavaScript. </p>
<p class="project-url"><small><strong>Podes verlo en:</strong> <a href="https://irungaray.github.io/Calculadora-de-Porcentaje/" target="_blank">Calculadora % GH Pages</a></small></p>
</div>

<figure class="project-imageContainer">
    <img class="project-image" src={calculadora} alt="Calculadora" width="600" height="300" />
</figure>
</article>

<article class="portfolio__project">

<div class="project-details">
    <h3 class="project-title">Rick & Morty Characters</h3>
<h6 class="project-course">HTML / CSS / JS</h6>
<p class="project-date"><small><strong>Fecha: 12/04/20 </strong></small></p>
<p class="project-description">Single Page Application with API of R&M Characters. Made with Javascript Vanilla </p>
<p class="project-url"><small><strong>Podes verlo en:</strong> <a href="https://irungaray.github.io/Rick-Morty-Characters/" target="_blank">R&M Characters GH Pages</a></small></p>
</div>

<figure class="project-imageContainer">
    <img class="project-image" src={rym} alt="Rick-Morty-Characters" width="600" height="300" />
</figure>
</article>

    </>
  );
};

export default OtherProject;
