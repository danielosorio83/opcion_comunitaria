import React, { Component, Fragment } from 'react';

import PlanPasos from './plan_pasos';

export default class PlanItem extends Component {
  render() {
    const { plan } = this.props;
    return (
      <Fragment>
        <blockquote className="blockquote">
          <h3>{plan.c202titulo}</h3>
          <footer className="blockquote-footer">
            Autor: {plan.autor} | <b>{plan.d202fecha_modif}</b> | Visitas: {plan.n202visitas}
          </footer>
        </blockquote>
        { plan.c202descripcion ? <Fragment><hr /><p>{plan.c202descripcion}</p></Fragment> : '' }
        <PlanPasos pasos={plan.pasos} plan_id={plan.k202id} />
      </Fragment>
    );
  }
}
