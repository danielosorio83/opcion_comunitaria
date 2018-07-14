import React, { Component } from 'react';

import VideoptLinks from './videopt_links';
import VideoYoutube from '../shared/video_youtube';
import ApiSwf from '../shared/api_swf';
import { parse_slides } from '../../globals';
import { CENTRO_APOYO_URL } from '../../constants';

class VideoptYoutubeRight extends Component {
  render() {
    const { videopt } = this.props;
    return (
      <div className="videopt row">
        <div className="pt col-8" >
          <ApiSwf slides={parse_slides(videopt.links)} contentline={`${CENTRO_APOYO_URL}/${videopt.CODE_PT}`} />
        </div>
        <div className="video col-4">
          <VideoYoutube videoId={videopt.CODE_VIDEOID} />
          <VideoptLinks links={videopt.links} />
        </div>
      </div>
    );
  }
}


export default VideoptYoutubeRight;
