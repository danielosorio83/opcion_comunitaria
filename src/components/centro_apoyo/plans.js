import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPlans } from '../../actions';
import { BASEDIR } from '../../routes/centro_apoyo';

class Plans extends Component {
  componentWillMount(){
    this.props.fetchPlans();
  }

  renderPlans(){
    return this.props.plans.map( (plan) => {
      return (
        <li key={plan.k202id} className="list-group-item">
          <div className="caption">
            <header>
              <h2 className="delta article__title">
                <Link to={`${BASEDIR}/planes/${plan.k202id}`}>{plan.c202titulo}</Link>
              </h2>
            </header>
            <footer className="sep">
              <p className="sep-list">
                <span className="sep-list__item">Autor: {plan.k01uid_crea}</span>
                <b className="sep-list__item">{plan.d202fecha_modif}</b>
                <span className="sep-list__item">Visitas: {plan.n202visitas}</span>
              </p>
            </footer>
            <p>{plan.c202descripcion}</p>
            <Link className="main-color big" to={`${BASEDIR}/planes/${plan.k202id}`}>Ver Plan de Formación</Link>
          </div>
          <span className="important"></span>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <h2>Planes de Formación</h2>
        {
          (typeof(this.props.plans) !== 'undefined')
            ?
              <ul className="list-group">
                {this.renderPlans()}
              </ul>
            :
            <p>No hay resultados para mostrar</p>
        }
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    plans: state.plans.all
  }
}

export default connect(mapStateToProps, { fetchPlans })(Plans);
