import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import OtherProject from '../containers/OtherProject';

const App = () => {
  return (
    <BrowserRouter basename="/Portafolio">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/others" component={OtherProject} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
