import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import VideoptItem from './videopt_item';

import Error from '../shared/error';
import Loading from '../shared/loading';
import HeaderTitle from '../shared/header_title';

import { findVideopt, destroyVideopt } from '../../actions/videopts';
import { BASEDIR } from '../../routes/centro_apoyo';

const queryString = require('qs');

class Videopt extends Component {
  componentWillMount(){
    this.props.findVideopt(this.props.match.params.id);
  }

  parseQS(){
    return queryString.parse(this.props.location.search.replace('?', ''));
  }

  planId(){
    const params = this.parseQS();
    return params.plan;
  }

  lupId(){
    const params = this.parseQS();
    return params.lup;
  }

  pathToBack(){
    const plan_id = this.planId();
    const lup_id = this.lupId();
    let path = lup_id ? '/lups/' + lup_id : '/videopts';
    path += plan_id ? `?plan=${plan_id}` : '';
    return BASEDIR + path;
  }

  destroyVideopt(){
    this.props.destroyVideopt(this.props.match.params.id)
      .then( () => {
        this.props.history.push(this.pathToBack());
      })
  }

  render() {
    const { videopt, error } = this.props;
    if (typeof(error) !== 'undefined'){
      return <Error data={error} title="Notas Técnicas" path={this.pathToBack()} />;
    }
    if (!videopt){
      return <Loading />;
    }

    return (
      <div>
        <HeaderTitle title="Notas Técnicas" path={this.pathToBack()} />
        <VideoptItem />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    videopt: state.videopts.single,
    error: state.videopts.error
  }
}

export default connect(mapStateToProps, { findVideopt, destroyVideopt })(withRouter(Videopt));
