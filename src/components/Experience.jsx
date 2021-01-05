import React from 'react';

import experience from "../assets/experience/experiencia.jpg";
import weld from "../assets/experience/weld.jpg";
import platzi from "../assets/experience/platzi.png";
import visual from"../assets/experience/visual.jpg";

import './styles/Experience.css'

const Experience = () => {
  return (
    <>
      <div className="experienceTitle__container">
        <h2 className="experience-list-title">Más sobre mi experiencia</h2>
      </div>

      <section id="experiencia" className="experience-list">
        <div className="experience__container">
          <article className="experience">
            <figure className="experience-imageContainer">
              <img
                className="experience-image"
                src={weld}
                alt="El gran Irungaray, 2"
                width="100"
                height="70"
              />
            </figure>

            <div className="experience-details">
              <h3 className="experience-title">Administracion de empresas</h3>
              <p className="experience-description">
                Como se indica en "Industrias Irungaray", administro
                2 empresas fundadas por mí, que funcionan en inmuebles de mi
                propiedad y que, en su momento, sumaron un total de 3 empleados. Dichas empresas me
                hicieron ganar experiencia, más allá de los propios trabajos, en
                contabilidad, liderazgo, trabajo en equipo, trato interpersonal, pensamiento estratégico, administración
                del tiempo, finanzas y economía.
              </p>
              <a
                className="experience-url"
                href="https://platzi.com/@irungaray-agustin/"
                target="_blank"
              >
                Ver Bitácora
              </a>
            </div>
          </article>

          <article className="experience">
            <figure className="experience-imageContainer">
              <img
                className="experience-image"
                src={platzi}
                alt="Platzi"
                width="100"
                height="70"
              />
            </figure>
            <div className="experience-details">
              <h3 className="experience-title">Cursos Platzi</h3>
              <p className="experience-description">
                Platzi es una plataforma latinoamericana de educación en linea.
                Cuenta con amplia gama de carreras de programacion. Actualmente
                estoy cursando las carreras de Desarrollo Backend con
                JavaScript, Arquitectura Frontend, JavaScript Profesional,
                Diseño gráfico y Fotografía digital.
              </p>
              <a
                className="experience-url"
                href="https://platzi.com/@irungaray-agustin/"
                target="_blank"
              >
                Ver Perfil
              </a>
              <a
                className="experience-url"
                href="https://platzi.com/@irungaray-agustin/"
                target="_blank"
              >
                Ver Cursos
              </a>
            </div>
          </article>

          <article className="experience">
            <figure className="experience-imageContainer">
              <img
                className="experience-image"
                src={visual}
                alt="Cameras"
                width="100"
                height="70"
              />
            </figure>
            <div className="experience-details">
              <h3 className="experience-title">Destreza en medios visuales</h3>
              <p className="experience-description">
                Produzco diversos contenidos multimedia. Me desempeño como
                fotógrafo artístico y de eventos. Respondo a las necesidades de
                mis clientes de manera original y creativa. Soy detallista en
                todos mis trabajos. Domino la comunicación audiovisual, la
                estética y la construcción de imágenes.
              </p>
              <a
                className="experience-url"
                href="https://www.instagram.com/irungaray.ph/"
                target="_blank"
              >
                Ver Perfil de Instagram
              </a>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Experience;
