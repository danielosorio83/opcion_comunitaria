import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

class Loading extends Component {
  render() {
    return (
      <FontAwesomeIcon icon={faSpinner} spin />
    );
  }
}

export default Loading;
