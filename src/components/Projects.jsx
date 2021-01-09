import React, { useContext, useEffect } from 'react';

import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

import Loader from './Loader';
import Project from './Project';

import './styles/Project.css';

const Projects = () => {
  const { projects } = useInitialState();

  const isLoading = projects.length == 0;

  return (
    <section id="portafolio" className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio-list-title">Portafolio</h2>
        {/* <div>
          {isLoading ? (
            <Loader />
          ) : (
            projects.map((project) => (
              <Project key={project.id} project={project} />
            ))
          )}
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
