import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#333'}}>
        <button className="navbar-toggler" aria-controls="navbarMain" aria-expanded="false" aria-label="Toggle navigation" data-target="#navbarMain" data-toggle="collapse" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a href="/" className="navbar-brand px-3 bg-warning">
          <img src="/images/icon.png" alt="Icon" />
        </a>
        <div id="navbarMain" className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item"><Link to="/centro_apoyo/planes">Planes de Formación</Link></li>
            <li className="nav-item"><Link to="/centro_apoyo/sitios">Sitios y Documentos</Link></li>
            <li className="nav-item"><Link to="/centro_apoyo/faqs">Preguntas Frecuentes</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
