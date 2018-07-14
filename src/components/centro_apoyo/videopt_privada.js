import React, { Component, Fragment } from 'react';

import Imagen from '../shared/imagen';
import { parse_fecha, parse_hora, parse_duracion } from '../../globals';

class VideoptPrivada extends Component {
  render() {
    const { videopt } = this.props;
    return (
      <Fragment>
        { videopt.c210foto ? <Imagen imagen={videopt.c210foto} ancho="390" alt={videopt.c210titulo} /> : '' }
        { videopt.m210conferencistas ? <p>Presenta: {videopt.m210conferencistas}</p> : '' }
        { videopt.d210fecha || videopt.d210hora ? <p><i>Grabado: {parse_fecha(videopt.d210fecha)} {parse_hora(videopt.d210hora)}</i></p> : '' }
        { videopt.n210duracion ? <p><i>Duración: {parse_duracion(videopt.n210duracion)}</i></p> : '' }
        <br/>
        <p><i>Esta nota técnica es solo para usuarios en linea</i></p>
      </Fragment>
    );
  }
}


export default VideoptPrivada;
