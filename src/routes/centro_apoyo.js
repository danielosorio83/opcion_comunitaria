import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Plans from '../components/centro_apoyo/plans';
import Plan from '../components/centro_apoyo/plan';
import Lup from '../components/centro_apoyo/lup';
import Sitio from '../components/centro_apoyo/sitio';
import Videopt from '../components/centro_apoyo/videopt';
import Exam from '../components/centro_apoyo/exam';

export const BASEDIR = '/centro_apoyo';

const Routes = () => {
  return (
    <Switch>
      <Route exact path={`${BASEDIR}/planes`} component={Plans}  />
      <Route exact path={`${BASEDIR}/planes/:id`} component={Plan}  />
      <Route exact path={`${BASEDIR}/lups/:id`} component={Lup}  />
      <Route exact path={`${BASEDIR}/sitios/:id`} component={Sitio}  />
      <Route exact path={`${BASEDIR}/notas_tecnicas/:id`} component={Videopt}  />
      <Route exact path={`${BASEDIR}/examenes/:id`} component={Exam}  />
      <Route component={Plans} />
    </Switch>
  );
}

export default Routes;
