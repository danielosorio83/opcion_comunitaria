import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoptLinks from './videopt_links';
import VideoYoutube from '../shared/video_youtube';
import ApiSwf from '../shared/api_swf';
import { parse_slides } from '../../globals';
import { CENTRO_APOYO_URL } from '../../constants';

class VideoptYoutubeRight extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_slide: this.props.current_slide,
      slide_times: this.props.slide_times
    }
  }
  render() {
    const { videopt } = this.props;
    console.log(this.props.current_slide);
    return (
      <div className="videopt row">
        <div className="pt col-8" >
          <ApiSwf slides={parse_slides(videopt.links)} contentline={`${CENTRO_APOYO_URL}/${videopt.CODE_PT}`} />
        </div>
        <div className="video col-4">
          <VideoYoutube videoId={videopt.CODE_VIDEOID} id="video" />
          <VideoptLinks links={videopt.links} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current_slide: state.current_slide,
    slide_times: state.slide_times
  }
};

export default connect(mapStateToProps)(VideoptYoutubeRight);
