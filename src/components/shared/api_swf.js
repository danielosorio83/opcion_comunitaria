import React, { Component } from 'react';
import ReactSWF from 'react-swf';

import { APISWF_URL } from '../../constants';
import { parse_slides, parse_times } from '../../globals';

class ApiSwf extends Component {
  constructor(props){
    super(props);
    this.state = {
      slide_times: [],
      apiswf: null,
      current_time: (new Date()).getTime()
    }
  }

  componentDidMount() {
    this.setState({
      slide_times: parse_times(this.props.videopt.links),
      apiswf: this.el.getFPDOMNode()
    });
  }

  componentDidUpdate(prevProps, prevState) {
    let { current_slide, player_ready } = this.props;
    let { slide_times, apiswf } = this.state;
    if (!prevProps.player_ready && player_ready && slide_times.length > 0 && slide_times[0][0] === 0){
      apiswf.seekExactFrame(slide_times[0][1]);
    }
    if (prevProps.current_slide !== current_slide){
      apiswf.seekExactFrame(slide_times[current_slide][1]);
    }
  }

  render() {
    const { videopt, contentline, id } = this.props;
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <ReactSWF
          className="embed-responsive"
          ref={c => this.el = c}
          align="l"
          quality="high"
          wmode="transparent"
          id={id}
          name={id}
          allowScriptAccess="always"
          src={`${APISWF_URL}?${this.state.current_time}`}
          flashVars={`espt=1&slides=${parse_slides(videopt)}&contentline=${contentline}`}
        />
      </div>
    );
  }
}

export default ApiSwf;
