import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error extends Component {
  render() {
    const { path, title, data, basedir } = this.props;
    return (
      <div>
        <h2>{title}</h2>
        <p className="text-danger">Error: {data.code}</p>
        <p className="text-danger">{data.error}</p>
        <Link to={`${basedir}/${path}`} className="btn btn-primary">Volver</Link>
      </div>
    );
  }
}

export default Error;
