import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoptLinks from './videopt_links';
import VideoYoutube from '../shared/video_youtube';
import ApiSwf from '../shared/api_swf';
import { CENTRO_APOYO_URL } from '../../constants';
import { parse_slides, parse_times } from '../../globals';

class VideoptYoutubeRight extends Component {
  render() {
    const { videopt, current_slide, changeSlide, player_ready, setPlayerReady } = this.props;
    let slide_times = parse_times(videopt.links);
    let slides = parse_slides(videopt);
    return (
      <div className="videopt row">
        <div className="pt col-8" >
          <ApiSwf espt="1" slides={slides} slide_times={slide_times} player_ready={player_ready} id="pt" contentline={`${CENTRO_APOYO_URL}/${videopt.CODE_PT}`} current_slide={current_slide} />
        </div>
        <div className="video col-4">
          <VideoYoutube slide_times={slide_times} player_ready={player_ready} setPlayerReady={setPlayerReady} videoId={videopt.CODE_VIDEOID} id="video" current_slide={current_slide} changeSlide={changeSlide} />
          <VideoptLinks current_slide={current_slide} changeSlide={changeSlide} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    videopt: state.videopts.single
  }
}

export default connect(mapStateToProps)(VideoptYoutubeRight);
