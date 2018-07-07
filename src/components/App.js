import React, { Component, Fragment } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <main className="inner cover" role="main">
          <img alt="Corporación Opción Comunitaria" src="./images/logo.jpg" className="img-fluid mb-5" />
          <h1 className="cover-heading text-warning">Bienvenidos</h1>
          <p className="lead mb-5">Queremos difundir, promover y gestionar la multiplicación de procesos comunitarios exitosos y sustentables que busquen mejorar la convivencia y la restitución y defensa de los derechos fundamentales consagrados en la Constitución Política de Colombia para sembrar raices para una paz estable y duradera.</p>
          <p className="lead">
            <a className="btn btn-lg btn-secondary mr-1" href="http://compaz.opcioncomunitaria.org/managers/sign_in">Ir a ComPAZ</a>
            <a className="btn btn-lg btn-secondary" href="http://compaz-staging.opcioncomunitaria.org/managers/sign_in">Zona de Pruebas</a>
          </p>
          <p className="lead">
            <a className="btn btn-lg btn-secondary" href="/centro_apoyo">Centro de Apoyo</a>
          </p>
        </main>
        <footer className="mastfoot mt-auto">
          <div className="inner">
            <p>© {(new Date()).getFullYear()} Corporación Opción Comunitaria</p>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default App;
