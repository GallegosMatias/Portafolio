import React from 'react';

const OtherProject = () => {
  return (
    <article className="portfolio__project">
      <div className="project-details">
        <h3 className="project-title">Otros Proyectos</h3>
        <h6 className="project-course">HTML / CSS / JavaScript</h6>
        <p className="project-date">
          <small>
            <strong>Fecha: 2019 - 2021</strong>
          </small>
        </p>
        <p className="project-description">
          Proyectos de mi etapa de aprendizaje más temprana. Landing Pages en HTML y CSS, SPAs en JavaScript Vanilla y algunos proyectos en ReactJs. Nada muy fastuoso, pero si aún así deseas verlos...
        </p>
        <p className="project-url">
          <small>
            <strong>Podés hacer click en</strong>{' '}
            <a href="{repo}" target="_blank">
              este Link
            </a>
          </small>
        </p>
      </div>

      <figure className="project-imageContainer">
        <img
          className="project-image"
          src="../assets/babyyoda.jpg"
          alt="Industrias Irungaray"
          width="600"
          height="300"
        />
      </figure>
    </article>
  );
};

export default OtherProject;
