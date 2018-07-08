import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loading from '../shared/loading';
import HeaderTitle from '../shared/header_title';

import PlansItem from './plans_item';

import { fetchPlans } from '../../actions/plans';

class Plans extends Component {
  componentWillMount(){
    this.props.fetchPlans();
  }

  renderPlans(){
    const { plans } = this.props;
    if (!plans){
      return <Loading />;
    }
    return plans.map( (plan) => {
      return (
        <li key={plan.k202id} className="list-group-item">
          <PlansItem plan={plan} />
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <HeaderTitle title="Planes de Formación" />
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
