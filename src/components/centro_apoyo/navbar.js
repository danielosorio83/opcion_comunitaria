import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { BASEDIR } from '../../routes/centro_apoyo';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#333'}}>
        <button className="navbar-toggler" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarMain" data-toggle="collapse" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a href="/" className="navbar-brand px-1 bg-light">
          <img src="/images/logo.jpg" alt="Icon" style={{height: '30px'}}/>
          <span className="ml-1 text-dark">Centro de Apoyo</span>
        </a>
        <div id="navbarMain" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to={`${BASEDIR}/planes`}>Planes de Formación</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to={`${BASEDIR}/sitios`}>Sitios y Documentos</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to={`${BASEDIR}/faqs`}>Preguntas Frecuentes</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}
