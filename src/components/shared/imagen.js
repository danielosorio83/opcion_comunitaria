import React, { Component } from 'react';

import { CENTRO_APOYO_IMAGE_URL } from '../../constants';

class Imagen extends Component {
  render() {
    const { imagen, ancho, alt } = this.props;
    return (
      <div>
        <img src={`${CENTRO_APOYO_IMAGE_URL}/${imagen}`} style={{width: ancho + 'px'}} alt={alt} />
      </div>
    );
  }
}

export default Imagen;
