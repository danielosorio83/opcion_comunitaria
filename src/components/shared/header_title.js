import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderTitle extends Component {
  render() {
    const { title, path } = this.props;
    return (
      <div className="header-title">
        { path
          ?
            <div className="float-right clearfix">
              <Link to={path} className="btn btn-info">Volver</Link>
            </div>
          :
          ''
        }
        <h2>{title}</h2>
      </div>
    );
  }
}

export default HeaderTitle;
