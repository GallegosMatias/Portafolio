import React from 'react';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

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