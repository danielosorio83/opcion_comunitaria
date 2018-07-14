import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import LupItem from './lup_item';

import Error from '../shared/error';
import Loading from '../shared/loading';
import HeaderTitle from '../shared/header_title';

import { findLup, destroyLup } from '../../actions/lups';
import { BASEDIR } from '../../routes/centro_apoyo';

const queryString = require('qs');

class Lup extends Component {
  componentWillMount(){
    this.props.findLup(this.props.match.params.id);
  }

  pathToBack(){
    const params = queryString.parse(this.props.location.search.replace('?', ''));
    const path = params.plan ? '/planes/' + params.plan : '/lups';
    return BASEDIR + path;
  }

  destroyLup(){
    this.props.destroyLup(this.props.match.params.id)
      .then( () => {
        this.props.history.push(this.pathToBack());
      })

  }

  render() {
    const { lup, error } = this.props;
    if (typeof(error) !== 'undefined'){
      return <Error data={error} title="Lecciones de un Punto" path={this.pathToBack()} />;
    }
    if (!lup){
      return <Loading />;
    }

    return (
      <div>
        <HeaderTitle title="Lecciones de un Punto" path={this.pathToBack()} />
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
