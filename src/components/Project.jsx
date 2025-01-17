import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Project.css';

const Project = ({ project }) => {
  // const API = 'http://localhost:1337';

  const repo = project.url;
  const deploy = project.urlTitle;

  const isDeployed = () => {
    if (deploy !== null) {
      return (
        <p className="project-url">
          <small>
            <strong>Podés ver el Despliegue en</strong>{' '}
            <a href={deploy} target="_blank">
              Este Link
            </a>
          </small>
        </p>
      );
    }
  };

  const isOtherProject = () => {
    if (project.date == null) {
      return (
        <p className="project-url">
          <small>
            <strong>Podés hacerlo en</strong>{' '}
            <Link to="/others">Este Link</Link>
          </small>
        </p>
      );
    }
  };

  return (
    <article className="portfolio__project">
      <div className="project-details">
        <h3 className="project-title">{project.title}</h3>
        <h6 className="project-course">{project.course}</h6>
        <p className="project-date">
          <small>
            <strong>Fecha: </strong> {project.date || '2019-2021'}
          </small>
        </p>
        <p className="project-description">{project.description}</p>
        <p className="project-url">
          {repo == null ? (
            ' '
          ) : (
            <small>
              <strong>Podés ver el Repositorio en</strong>{' '}
              <a href={repo} target="_blank">
                Este Link
              </a>
            </small>
          )}
        </p>
        {isDeployed()}
        {isOtherProject()}
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
