import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import ScrollToTopOnMount from '../utils/ScrollToTopOnMount';

import useInitialState from '../hooks/useInitialState';

import './styles/App.css';

const App = () => {
  return (
    <>
      <ScrollToTopOnMount />
      <Header />
      <Hero />
      <Projects projects={useInitialState.projects} />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
