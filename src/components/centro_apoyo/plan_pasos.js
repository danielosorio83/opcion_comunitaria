import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { BASEDIR } from '../../routes/centro_apoyo';

class PlanPasos extends Component {
  renderPasos(){
    const { pasos } = this.props;
    return Object.keys(pasos).map( (i) => {
      let paso = pasos[i];
      return (
        <li key={paso.id}>
          <strong>{i}. <Link to={`${BASEDIR}/lups/${paso.id}`}>{paso.descripcion}</Link></strong>
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
                <p>Lecciones para certificarse en este plan de formación:</p>
                <ul className="list-unstyled">
                  {this.renderPasos()}
                </ul>
              </Fragment>
            :
            <p>Este plan de formación no tiene lecciones para certificarse</p>
        }
      </Fragment>
    );
  }
}

export default PlanPasos;
