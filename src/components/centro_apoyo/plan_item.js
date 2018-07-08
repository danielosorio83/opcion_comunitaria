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
        <p>{plan.c202descripcion}</p>
        <PlanPasos pasos={plan.pasos} />
      </Fragment>
    );
  }
}
