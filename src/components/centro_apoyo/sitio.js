import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SitioItem from './sitio_item';

import Error from '../shared/error';
import Loading from '../shared/loading';
import HeaderTitle from '../shared/header_title';

import { findSitio, destroySitio } from '../../actions/sitios';
import { BASEDIR } from '../../routes/centro_apoyo';

const queryString = require('query-string');

class Sitio extends Component {
  componentWillMount(){
    this.props.findSitio(this.props.match.params.id);
  }

  pathToBack(){
    const params = queryString.parse(this.props.location.search);
    const path = params.lup ? '/lups' + params.lup : '/sitios';
    return BASEDIR + path;
  }

  destroySitio(){
    this.props.destroySitio(this.props.match.params.id)
      .then( () => {
        this.props.history.push(this.pathToBack());
      })
  }

  render() {
    const { sitio, error } = this.props;
    if (typeof(error) !== 'undefined'){
      return <Error data={error} title="Sitios y Documentos" path={this.pathToBack()} />;
    }
    if (!sitio){
      return <Loading />;
    }

    return (
      <div>
        <HeaderTitle title="Sitios y Documentos" path={this.pathToBack()} />
        <SitioItem sitio={sitio} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    sitio: state.sitios.single,
    error: state.sitios.error
  }
}

export default connect(mapStateToProps, { findSitio, destroySitio })(withRouter(Sitio));
