import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Plans from '../components/centro_apoyo/plans';
import Plan from '../components/centro_apoyo/plan';
import Lup from '../components/centro_apoyo/lup';

export const BASEDIR = '/centro_apoyo';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={`${BASEDIR}/planes`} component={Plans}  />
      <Route exact path={`${BASEDIR}/planes/:id`} component={Plan}  />
      <Route exact path={`${BASEDIR}/lups/:id`} component={Lup}  />
      <Route component={Plans} />
    </Switch>
  );
}

export default Routes;
