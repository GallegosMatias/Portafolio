import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import OtherProjects from '../containers/OtherProjects';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/others" component={ OtherProjects } />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
