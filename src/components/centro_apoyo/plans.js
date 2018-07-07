import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchPlans } from '../../actions';

class Plans extends Component {
  componentWillMount(){
    this.props.fetchPlans();
  }

  renderPlans(){
    return this.props.plans.map( (plan) => {
      return (
        <li key={plan.id} className="list-group-item">
          <strong><Link to={`/planes/${plan.id}`}>{plan.title}</Link></strong>
        </li>
      )
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group">
          {this.renderPlans()}
        </ul>
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
