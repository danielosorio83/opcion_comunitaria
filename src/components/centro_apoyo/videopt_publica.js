import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import VideoptYoutube from './videopt_youtube';
import VideoptClipsharedemo from './videopt_clipsharedemo';
import UnderConstruction from '../shared/under_construction';

class VideoptPublica extends Component {
  render() {
    const { videopt } = this.props;
    let tipovideo = parseInt(videopt.i210tipovideo, 10);
    let youtube = (tipovideo === 1);
    let clipsharedemo = (tipovideo > 1 && tipovideo < 5);
    return (
      <Fragment>
        {
          (youtube
            ? <VideoptYoutube />
            : (clipsharedemo
              ? <VideoptClipsharedemo />
              : <UnderConstruction />
            )
          )
        }
      </Fragment>
    );
  }
}

function mapStateToProps(state){
  return {
    videopt: state.videopts.single
  }
}

export default connect(mapStateToProps)(VideoptPublica);
