import React from 'react';

import Header from './Header';
import Hero from './Hero';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

import './styles/App.css';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects projects={useInitialState.projects}/>
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
