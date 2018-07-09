import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import PlanItem from './plan_item';

import Error from '../shared/error';
import Loading from '../shared/loading';
import HeaderTitle from '../shared/header_title';

import { findPlan, destroyPlan } from '../../actions/plans';
import { BASEDIR } from '../../routes/centro_apoyo';

class Plan extends Component {
  componentWillMount(){
    this.props.findPlan(this.props.match.params.id);
  }

  destroyPlan(){
    this.props.destroyPlan(this.props.match.params.id)
      .then( () => {
        this.props.history.push(BASEDIR + '/planes');
      })

  }

  render() {
    const { plan, error } = this.props;
    if (typeof(error) !== 'undefined'){
      return <Error data={error} title="Planes de Formación" path={`${BASEDIR}/planes`} />;
    }
    if (!plan){
      return <Loading />;
    }

    return (
      <div>
        <HeaderTitle title="Planes de Formación" path={`${BASEDIR}/planes`} />
        <PlanItem plan={plan} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    plan: state.plans.single,
    error: state.plans.error
  }
}

export default connect(mapStateToProps, { findPlan, destroyPlan })(withRouter(Plan));
