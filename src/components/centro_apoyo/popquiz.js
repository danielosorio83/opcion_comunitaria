import React, { Component } from 'react';
import { connect } from 'react-redux';

import PopquizForm from './popquiz_form';
import Error from '../shared/error';
import Loading from '../shared/loading';

import { findPopquiz } from '../../actions/popquiz';

class Popquiz extends Component {
  componentWillMount(){
    this.props.findPopquiz(this.props.k211id);
  }

  showPopquizResultado(){
    console.log('RESULTADO');
  }

  render() {
    const { popquiz, error } = this.props;
    if (typeof(error) !== 'undefined'){
      return <Error data={error} title="Popquiz" />;
    }
    if (!popquiz){
      return <Loading />;
    }

    return (
      <div>
        <h4>Tomará solo un minuto</h4>
        <PopquizForm showPopquizResultado={this.showPopquizResultado.bind(this)}  />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    popquiz: state.popquiz.single,
    error: state.popquiz.error
  }
}

export default connect(mapStateToProps, { findPopquiz })(Popquiz);
