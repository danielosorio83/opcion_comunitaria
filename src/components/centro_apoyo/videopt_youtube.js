import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import VideoptSlideshare from './videopt_slideshare';
import VideoptNoSlideshare from './videopt_no_slideshare';
import VideoptYoutubeLeft from './videopt_youtube_left';
import VideoptYoutubeRight from './videopt_youtube_right';

class VideoptPublica extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_slide: 0,
      slide_times: []
    }
  }
  render() {
    const { videopt } = this.props;
    let tipopt = parseInt(videopt.i210tipopt, 10);
    let slideshare = (tipopt === 0)
    let template = parseInt(videopt.i210template, 10);
    let solovideo = (tipopt === 7);
    let videoleft = ([1,3,4].includes(template) || solovideo);
    return (
      <Fragment>
        { slideshare ? <VideoptSlideshare videopt={videopt} /> : <VideoptNoSlideshare videopt={videopt} /> }
        { videoleft ? <VideoptYoutubeLeft videopt={videopt} /> : <VideoptYoutubeRight videopt={videopt} /> }
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current_slide: state.current_slide,
    slide_times: state.slide_times
  }
};

export default connect(mapStateToProps)(VideoptPublica);
