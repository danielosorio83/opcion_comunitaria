import React, { Component } from 'react';
import YouTube from 'react-youtube';

class VideoYoutube extends Component {
  render() {
    return (
      <YouTube
        videoId={this.props.videoId}
        className="embed-responsive-item"
        containerClassName="embed-responsive embed-responsive-16by9"
        onReady={this._onReady}
        onStateChange={this._onChange}
      />
    );
  }

  _onReady(event){
    // access to player in all event handlers via event.target
  }

  _onChange(event){

  }
}

export default VideoYoutube;
