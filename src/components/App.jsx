import React from 'react';

import Header from './Header';
import Hero from './Hero';
import Project from './Project';
import Experience from './Experience';
import Contact from './Contact';

import './styles/App.css';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Project />
      <Experience />
      <Contact />
    </>
  );
};

export default App;
