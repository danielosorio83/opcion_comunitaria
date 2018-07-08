import React, { Component, Fragment } from 'react';
import '../styles/centro_apoyo.css'

import Navbar from '../components/centro_apoyo/navbar';
import Routes from '../routes/centro_apoyo';

class CentroApoyo extends Component {
  componentWillMount(){
    document.body.className = '';
    document.getElementById('root').className = 'centro_apoyo';
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container-fluid">
          <Routes />
        </div>
      </Fragment>
    );
  }
}

export default CentroApoyo;
