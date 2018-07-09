import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import VideoptItem from './videopt_item';

import Error from '../shared/error';
import Loading from '../shared/loading';
import HeaderTitle from '../shared/header_title';

import { findVideopt, destroyVideopt } from '../../actions/videopts';
import { BASEDIR } from '../../routes/centro_apoyo';

const queryString = require('query-string');

class Videopt extends Component {
  componentWillMount(){
    this.props.findVideopt(this.props.match.params.id);
  }

  pathToBack(){
    const params = queryString.parse(this.props.location.search);
    const path = params.lup ? '/lups' + params.lup : '/videopts';
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
        <VideoptItem videopt={videopt} />
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
