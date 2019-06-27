import React, { Component, Fragment } from 'react';
import '../styles/home.css'

class Home extends Component {
  componentWillMount(){
    document.body.className = 'home text-center';
    document.getElementById('root').className = 'cover-container d-flex h-100 p-3 mx-auto flex-column';
  }
  componentWillUnmount(){
    document.body.className = '';
    document.getElementById('root').className = '';
  }
  render() {
    return (
      <Fragment>
        <main id="home" className="inner cover" role="main">
          <img alt="Corporación Opción Comunitaria" src="./images/logo.jpg" className="img-fluid mb-5" />
          <h1 className="cover-heading text-warning">Bienvenidos</h1>
          <p className="lead mb-5">Queremos difundir, promover y gestionar la multiplicación de procesos comunitarios exitosos y sustentables que busquen mejorar la convivencia y la restitución y defensa de los derechos fundamentales consagrados en la Constitución Política de Colombia para sembrar raices para una paz estable y duradera.</p>
          <p className="lead">
            <a className="btn btn-lg btn-secondary" href="http://compaz.opcioncomunitaria.org/managers/sign_in">Ir a ComPaz</a>
          </p>
          <p className="lead">
            <a className="btn btn-lg btn-secondary mr-1" href="http://compaz-pruebas.opcioncomunitaria.org/managers/sign_in">Zona de Pruebas</a>
            <a className="btn btn-lg btn-secondary" href="http://compaz-pruebas2.opcioncomunitaria.org/managers/sign_in">Zona de Pruebas 2</a>
          </p>
          {/* <p className="lead">
            <a className="btn btn-lg btn-secondary" href="/ci/centro_apoyo">Centro de Apoyo</a>
          </p> */}
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

export default Home;
