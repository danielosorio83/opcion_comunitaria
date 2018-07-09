import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Parser = require('html-react-parser');

class Error extends Component {
  render() {
    const { path, title, data } = this.props;
    let code, error;
    if (!data.code){
      code = 'Internal Server Error';
      error = data.message;
    }else{
      code = data.code;
      error = Parser(data.error);
    }
    return (
      <div>
        <h2>{title}</h2>
        <p className="text-danger">Error: {code}</p>
        <p className="text-danger">{error}</p>
        <Link to={path} className="btn btn-primary">Volver</Link>
      </div>
    );
  }
}

export default Error;
