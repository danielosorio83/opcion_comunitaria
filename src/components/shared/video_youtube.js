import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { connect } from 'react-redux';

class VideoYoutube extends Component {
  constructor(props){
    super(props);
    this.state = {
      id_interval: null,
      ytplayer: null,
      current_slide: this.props.current_slide,
      slide_times: this.props.slide_times
    }
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
    console.log(this.props.current_slide);
    // access to player in all event handlers via event.target
    this.setState({
      ytplayer: event.target
    });
  }

  _onChange(event){
    let { current_slide, ytplayer } = this.state;
    let slide_times = [];
    switch (ytplayer.getPlayerState()){
      case -1:
        /* alert("NO INICIADO"); */
        break;
      case 0:
        /* alert("FINALIZADO"); */
        this.setState({
          current_slide: 1
        });
        this.changeSlide(1);
        break;
      case 1:
        /* alert("REPRODUCIENDO"); */
        for (var i=0; i < slide_times.length-1; i++){
          let current_time = Math.floor(ytplayer.getCurrentTime());
          if (current_time >= slide_times[i][0] && current_time <= slide_times[i+1][0]){
            if (current_slide !== i) this.changeSlide(slide_times[i][1]);
            current_slide = i;
          }
        }
        this.setState({
            id_interval: setInterval(function(){
              this.runSync().bind(this)
            }, 1000)
        });
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
    let { current_slide, slide_times, ytplayer } = this.state;
    const duracion = ytplayer.getDuration();
    const tiempo_transucrrido = ytplayer.getCurrentTime();
    if (ytplayer.getPlayerState() === 1){
      if (duracion > 0){
        for(var i = current_slide; i < slide_times.length; i++){
          if (slide_times[i][0] <= Math.floor(tiempo_transucrrido) && current_slide < i){
            this.changeSlide(slide_times[i][1]);
            this.setState({
              current_slide: i
            });
            break;
          }
        }
      }
    }else{
      clearInterval(this.state.id_interval);
    }
  }

  seek(i){
    let { slide_times, ytplayer, apiswf } = this.props;
    ytplayer.seekTo(slide_times[i][0], true);
    // {{?ESPT_YOUTUBE?}}ytplayer2.seekTo(slide_times[i][1], true);{{?ESPT_YOUTUBE?}}
    // {{?ESPT_CLIPSHAREDEMO?}}flvplayer2.seekExactTime(slide_times[i][1]);{{?ESPT_CLIPSHAREDEMO?}}
    apiswf.seekExactFrame(slide_times[i][1]);
    this.setState({
      current_slide: i
    });
  }

  changeSlide(slide){
    // {{?ESPT_YOUTUBE?}}ytplayer2.seekTo(slide, true);{{?ESPT_YOUTUBE?}}
    // {{?ESPT_CLIPSHAREDEMO?}}flvplayer2.seekExactTime(slide);{{?ESPT_CLIPSHAREDEMO?}}
    this.props.apiswf.seekExactFrame(slide);
  }
}

const mapStateToProps = (state) => {
  return {
    current_slide: state.current_slide,
    slide_times: state.slide_times
  }
};

export default connect(mapStateToProps)(VideoYoutube);
