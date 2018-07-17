import React, { Component } from 'react';

import VideoptLinks from './videopt_links';
import VideoYoutube from '../shared/video_youtube';
import ApiSwf from '../shared/api_swf';
import { CENTRO_APOYO_URL } from '../../constants';

class VideoptYoutubeRight extends Component {
  render() {
    const { videopt, current_slide, changeSlide, player_ready, setPlayerReady } = this.props;
    return (
      <div className="videopt row">
        <div className="pt col-8" >
          <ApiSwf videopt={videopt}  player_ready={player_ready} id="pt" contentline={`${CENTRO_APOYO_URL}/${videopt.CODE_PT}`} current_slide={current_slide} />
        </div>
        <div className="video col-4">
          <VideoYoutube videopt={videopt} player_ready={player_ready} setPlayerReady={setPlayerReady} videoId={videopt.CODE_VIDEOID} id="video" current_slide={current_slide} changeSlide={changeSlide} />
          <VideoptLinks links={videopt.links} current_slide={current_slide} changeSlide={changeSlide} />
        </div>
      </div>
    );
  }
}

export default VideoptYoutubeRight;
