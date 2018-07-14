import React, { Component } from 'react';

import { CENTRO_APOYO_APISWF_URL } from '../../constants';

class ApiSwf extends Component {
  render() {
    const { slides, contentline } = this.props;
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <embed
          className="embed-responsive"
          quality="high"
          wmode="transparent"
          id="apiswf"
          name="apiswf"
          allowscriptaccess="always"
          src={CENTRO_APOYO_APISWF_URL}
          flashvars={`espt=1&slides=${slides}&contentline=${contentline}`}
          type="application/x-shockwave-flash"
        />
        </div>
    );
  }
}

export default ApiSwf;
