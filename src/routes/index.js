import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../components/home';
import CentroApoyo from '../components/centro_apoyo';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/centro_apoyo" component={CentroApoyo} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
