import { useState, useEffect } from 'react';
import axios from 'axios';

import initialState from '../initialState';

const API = 'http://localhost:1337/projects';

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProjects(response.data);
  }, []);

  // console.log(projects)

  return {
    projects,
    state
  };
};

export default useInitialState;