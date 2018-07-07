import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { findPlan, destroyPlan } from '../../actions';

class Plan extends Component {
  componentWillMount(){
    this.props.findPlan(this.props.match.params.id);
  }

  destroyPlan(){
    this.props.destroyPlan(this.props.match.params.id)
      .then( () => {
        this.props.history.push('/centro_apoyo/planes');
      })

  }

  render() {
    const { plan } = this.props;
    if (!plan){
      return <div>Cargando...</div>;
    }

    return (
      <div>
        <div className="btn-group pull-right">
          <Link to="/" className="btn btn-primary">Back</Link>
          <button type="button" className="btn btn-danger" onClick={this.destroyPlan.bind(this)}>Borrar</button>
        </div>
        <h3 className="lead">{plan.title}</h3>
        <p>{plan.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    plan: state.plans.plan
  }
}

export default connect(mapStateToProps, { findPlan, destroyPlan })(withRouter(Plan));
