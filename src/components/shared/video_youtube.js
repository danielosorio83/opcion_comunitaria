import React, { Component } from 'react';
import YouTube from 'react-youtube';

import { parse_times } from '../../globals';

class VideoYoutube extends Component {
  constructor(props){
    super(props);
    this.state = {
      id_interval: null,
      slide_times: [],
      ytplayer: null,
      active_slide: 0
    }
  }

  componentDidMount() {
    this.setState({
      slide_times: parse_times(this.props.videopt.links),
      active_slide: this.props.current_slide
    });
  }

  componentDidUpdate(prevProps, prevState) {
    let { current_slide } = this.props;
    let { slide_times, ytplayer } = this.state;
    if (prevProps.current_slide !== current_slide && current_slide !== this.state.active_slide){
      this.changeActiveSlide(current_slide);
      ytplayer.seekTo(slide_times[current_slide][0], true);
    }
  }

  changeActiveSlide(active_slide){
    this.setState({ active_slide });
    this.props.changeSlide(active_slide);
  }

  render() {
    return (
      <YouTube
        videoId={this.props.videoId}
        id={this.props.id}
        className="embed-responsive-item"
        containerClassName="embed-responsive embed-responsive-16by9"
        onReady={this._onReady.bind(this)}
        onStateChange={this._onChange.bind(this)}
      />
    );
  }

  _onReady(event){
    // access to player in all event handlers via event.target
    this.setState({
      ytplayer: event.target
    });
    this.props.setPlayerReady();
  }

  _onChange(event){
    let { ytplayer } = this.state;
    switch (ytplayer.getPlayerState()){
      case -1:
        /* alert("NO INICIADO"); */
        break;
      case 0:
        /* alert("FINALIZADO"); */
        this.changeActiveSlide(0);
        break;
      case 1:
        /* alert("REPRODUCIENDO"); */
        let interval = setInterval(() => { this.runSync() }, 1000);
        this.setState({ id_interval: interval });
        break;
      case 2:
        /* alert("PAUSADO"); */
        break;
      case 3:
        /* alert("BUFFERING"); */
        break;
      case 5:
        /* alert("COLA DE VIDEOS"); */
        break;
      default:
        break;
    }
  }

  runSync(){
    let { current_slide } = this.props;
    let { slide_times, ytplayer } = this.state;
    const duracion = ytplayer.getDuration();
    const tiempo_transucrrido = ytplayer.getCurrentTime();
    if (ytplayer.getPlayerState() === 1){
      if (duracion > 0){
        for(var i = current_slide; i < slide_times.length; i++){
          if (slide_times[i][0] <= Math.floor(tiempo_transucrrido) && current_slide < i){
            this.changeActiveSlide(i);
            break;
          }
        }
      }
    }else{
      clearInterval(this.state.id_interval);
    }
  }
}

export default VideoYoutube;
