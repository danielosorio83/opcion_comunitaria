import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

class Loading extends Component {
  render() {
    return (
      <div className="flex-container text-center mt-3">
        <FontAwesomeIcon icon={faSpinner} spin size="8x" />
      </div>
    );
  }
}

export default Loading;
