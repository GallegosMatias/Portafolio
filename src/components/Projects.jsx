import React, { useContext } from 'react';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

import Project from './Project';

import './styles/Project.css';

const Projects = () => {
  const { projects } = useInitialState()

  console.log(projects)

  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio-list-title">Portafolio</h2>
        <div>
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
          />
        ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;