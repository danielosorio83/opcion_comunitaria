import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { BASEDIR } from '../../routes/centro_apoyo';
import { path_by_tipo } from '../../globals';

class LupPasos extends Component {
  renderPasos(){
    const { pasos, lup_id } = this.props;
    return Object.keys(pasos).map( (i) => {
      let paso = pasos[i];
      return (
        <li key={i}>
          <strong>{i}. <Link to={`${BASEDIR}/${path_by_tipo(paso.tipo)}/${paso.tipoid}?lup=${lup_id}`}>{paso.descripcion}</Link></strong>
        </li>
      )
    })
  }

  render() {
    return (
      <Fragment>
        <hr />
        {
          this.props.pasos
            ?
              <Fragment>
                <p>Pasos para completar esta lección:</p>
                <ul className="list-unstyled">
                  {this.renderPasos()}
                </ul>
              </Fragment>
            :
            <p>Esta lección de un punto no tiene pasos para completar</p>
        }
      </Fragment>
    );
  }
}

export default LupPasos;
