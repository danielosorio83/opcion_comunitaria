import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './centro_apoyo/navbar';
import Plans from './centro_apoyo/plans';
import Plan from './centro_apoyo/plan';

class CentroApoyo extends Component {
  componentDidMount(){
    document.body.className = '';
    document.getElementById('root').className = '';
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <div class="container-fluid">
          <BrowserRouter>
            <Switch>
              <Route path="/planes" component={Plans}  />
              <Route path="/planes/:id" component={Plan}  />
              <Route component={Plans} />
            </Switch>
          </BrowserRouter>
        </div>
      </Fragment>
    );
  }
}

export default CentroApoyo;
