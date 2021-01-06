import React from 'react';
import axios from 'axios';

import './styles/Project.css';

const Project = ({ project }) => {
  // const API = 'http://localhost:1337';

  return (
    <article className="portfolio__project">
      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        <h6 className="project-course">{project.course}</h6>
        <p className="project-date">
          <small>
            <strong>Fecha: </strong> {project.date}
          </small>
        </p>
        <p className="project-description">
          {project.description}
        </p>
        <p className="project-url">
          <small>
            <strong>Podes verlo en:</strong>{' '}
            <a
              href={project.url}
              target="_blank"
            >
             {project.urlTitle}
            </a>
          </small>
        </p>
      </div>

      <figure className="project-imageContainer">
        <img
          className="project-image"
          // DEVELOPMENT: src={`${API}${project.image.url}`}
          src={project.image.url}
          alt="Industrias Irungaray"
          width="600"
          height="300"
        />
      </figure>
    </article>
  );
};

export default Project;
