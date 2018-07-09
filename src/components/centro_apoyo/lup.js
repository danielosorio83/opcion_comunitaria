import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LupItem from './lup_item';

import Error from '../shared/error';
import Loading from '../shared/loading';
import HeaderTitle from '../shared/header_title';

import { findLup, destroyLup } from '../../actions/lups';
import { BASEDIR } from '../../routes/centro_apoyo';

const queryString = require('query-string');

class Lup extends Component {
  componentWillMount(){
    this.props.findLup(this.props.match.params.id);
  }

  destroyLup(){
    this.props.destroyLup(this.props.match.params.id)
      .then( () => {
        this.props.history.push(BASEDIR + '/planes');
      })

  }

  render() {
    const { lup, error, location } = this.props;
    const params = queryString.parse(location.search)
    if (typeof(error) !== 'undefined'){
      return <Error data={error} title="Lup de Formación" path={`${BASEDIR}/planes/${params.plan}`} />;
    }
    if (!lup){
      return <Loading />;
    }

    return (
      <div>
        <HeaderTitle title="Lección de un Punto" path={`${BASEDIR}/planes/${params.plan}`} />
        <LupItem lup={lup} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    lup: state.lups.single,
    error: state.lups.error
  }
}

export default connect(mapStateToProps, { findLup, destroyLup })(withRouter(Lup));
