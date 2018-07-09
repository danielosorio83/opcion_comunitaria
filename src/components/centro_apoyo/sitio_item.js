import React, { Component, Fragment } from 'react';

import Anexos from '../shared/anexos';

export default class SitioItem extends Component {
  render() {
    const { sitio } = this.props;
    return (
      <Fragment>
        <blockquote className="blockquote">
          <h3>{sitio.c18leyenda}</h3>
          <footer className="blockquote-footer">
            Autor: {sitio.autor} | <b>{sitio.c18date_modif}</b> | Visitas: {sitio.n18visitas}
          </footer>
        </blockquote>
        <hr />
        { sitio.imagen ? <img src={sitio.imagen} alt={sitio.c18leyenda} /> : '' }
        { sitio.m18descri ? <p>{sitio.m18descri}</p> : '' }
        { sitio.c18enlace ? <a className="btn btn-sm btn-link" href={sitio.c18enlace}>Abrir enlace</a> : '' }
        <Anexos anexos={sitio.anexos} />
      </Fragment>
    );
  }
}
