import React, { Component, Fragment } from 'react';

export default class VideoptItem extends Component {
  render() {
    const { videopt } = this.props;
    return (
      <Fragment>
        <blockquote className="blockquote">
          <h3>{videopt.c210titulo}</h3>
          <footer className="blockquote-footer">
            Autor: {videopt.autor} | <b>{videopt.c210date_crea}</b> | Visitas: {videopt.n210visitas}
          </footer>
        </blockquote>
        { videopt.c210descripcion ? <Fragment><hr /><p>{videopt.c210descripcion}</p></Fragment> : '' }
      </Fragment>
    );
  }
}
