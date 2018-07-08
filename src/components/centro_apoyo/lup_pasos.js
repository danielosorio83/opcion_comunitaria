import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { BASEDIR } from '../../routes/centro_apoyo';

class LupPasos extends Component {
  renderPasos(){
    const { lups } = this.props;
    return Object.keys(lups).map( (i) => {
      let lup = lups[i];
      return (
        <li key={lup.id}>
          <strong>{i}. <Link to={`${BASEDIR}/lups/${lup.id}`}>{lup.descripcion}</Link></strong>
        </li>
      )
    })
  }

  render() {
    return (
      <Fragment>
        <hr />
        {
          this.props.lups
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
