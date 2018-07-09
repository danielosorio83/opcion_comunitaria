import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { BASEDIR } from '../../routes/centro_apoyo';

export default class PlansItem extends Component {
  render() {
    const { plan } = this.props;
    return (
      <Fragment>
        <blockquote className="blockquote">
          <Link className="h4" to={`${BASEDIR}/planes/${plan.k202id}`}>{plan.c202titulo}</Link>
          <footer className="blockquote-footer">
            Autor: {plan.autor} | <b>{plan.d202fecha_modif}</b> | Visitas: {plan.n202visitas}
          </footer>
        </blockquote>
        <p className="text-truncate">{plan.c202descripcion}</p>
        <Link className="btn btn-sm btn-dark" to={`${BASEDIR}/planes/${plan.k202id}`}>Ver Plan de Formación</Link>
      </Fragment>
    );
  }
}
