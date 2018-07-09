import React, { Component, Fragment } from 'react';

export default class SitioItem extends Component {
  render() {
    const { sitio } = this.props;
    return (
      <Fragment>
        <blockquote className="blockquote">
          <h3>{sitio.c20titulo}</h3>
          <footer className="blockquote-footer">
            Autor: {sitio.autor} | <b>{sitio.d20fecha_modif}</b> | Visitas: {sitio.n20visitas}
          </footer>
        </blockquote>
        { sitio.c20descripcion ? <Fragment><hr /><p>{sitio.c20descripcion}</p></Fragment> : '' }
      </Fragment>
    );
  }
}
