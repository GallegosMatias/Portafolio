import { useState, useEffect } from 'react';
import axios from 'axios';

import initialState from '../initialState';

// const API = 'http://localhost:1337/projects';
const API = 'https://portafolio-300819.uc.r.appspot.com/projects';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProjects(response.data);
  }, []);

  return {
    projects,
    state,
  };
};

export default useInitialState;
