import React, { Component, Fragment } from 'react';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className="masthead mb-auto">
          <div className="inner">
            <a className="navbar-brand px-3 bg-warning" href="/">
            </a>
            <nav className="nav nav-masthead justify-content-center">
              <a className="nav-link active" href='/'>Inicio</a>
              <a className="nav-link" href='compaz.%PUBLIC_URL%'>Compaz</a>
            </nav>
          </div>
        </header>
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
