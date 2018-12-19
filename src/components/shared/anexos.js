import React, { Component, Fragment } from 'react';

import { CENTRO_APOYO_DOWNLOAD_URL } from '../../constants';

class Anexos extends Component {
  renderAnexos(){
    const { anexos } = this.props;
    return Object.keys(anexos).map( (i) => {
      let anexo = anexos[i];
      return (
        <li key={anexo.k19id}>
          <a href={`${CENTRO_APOYO_DOWNLOAD_URL}&det=${anexo.k19id}`} target="_blank" rel={`anexo_${anexo.k19id}`} alt={anexo.c19nombre}>{anexo.c19nombre}</a>
        </li>
      )
    })
  }
  render() {
    const { anexos } = this.props;
    if (typeof(anexos) === 'undefined') return '';
    return (
      <Fragment>
        <p className="lead">Anexos</p>
        <ul>
          {this.renderAnexos()}
        </ul>
      </Fragment>
    );
  }
}

export default Anexos;
