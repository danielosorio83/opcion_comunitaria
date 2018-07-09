import React, { Component, Fragment } from 'react';

import LupPasos from './lup_pasos';

export default class LupItem extends Component {
  render() {
    const { lup } = this.props;
    return (
      <Fragment>
        <blockquote className="blockquote">
          <h3>{lup.c201titulo}</h3>
          <footer className="blockquote-footer">
            Autor: {lup.autor} | <b>{lup.d201fecha_modif}</b> | Visitas: {lup.n201visitas}
          </footer>
        </blockquote>
        { lup.c201descripcion ? <Fragment><hr /><p>{lup.c201descripcion}</p></Fragment> : '' }
        <LupPasos pasos={lup.pasos} lup_id={lup.k201id} />
      </Fragment>
    );
  }
}
