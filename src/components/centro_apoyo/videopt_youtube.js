import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import VideoptSlideshare from './videopt_slideshare';
import VideoptNoSlideshare from './videopt_no_slideshare';
import VideoptYoutubeLeft from './videopt_youtube_left';
import VideoptYoutubeRight from './videopt_youtube_right';
import VideoptSync from './videopt_sync';

class VideoptPublica extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_slide: 0,
      player_ready: false
    }
  }

  changeSlide(new_slide){
    this.setState({
      current_slide: new_slide
    });
  }

  setPlayerReady(){
    this.setState({
      player_ready: true
    });
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
        { slideshare ? <VideoptSlideshare /> : <VideoptNoSlideshare /> }
        { videoleft
          ? <VideoptYoutubeLeft player_ready={this.state.player_ready} setPlayerReady={this.setPlayerReady.bind(this)} current_slide={this.state.current_slide} changeSlide={this.changeSlide.bind(this)} solovideo={solovideo} />
          : <VideoptYoutubeRight player_ready={this.state.player_ready} setPlayerReady={this.setPlayerReady.bind(this)} current_slide={this.state.current_slide} changeSlide={this.changeSlide.bind(this)} />
        }
        <VideoptSync current_slide={this.state.current_slide} changeSlide={this.changeSlide.bind(this)} />
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
