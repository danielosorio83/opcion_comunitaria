import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/home';
import CentroApoyo from '../components/centro_apoyo';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/centro_apoyo" component={CentroApoyo} />
    </Switch>
  );
}

export default Routes;
