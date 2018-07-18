import React, { Component } from 'react';
import ReactSWF from 'react-swf';

import { APISWF_URL } from '../../constants';

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
      slide_times: this.props.slide_times,
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
    const { slides, contentline, id } = this.props;
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
          flashVars={`espt={this.props.espt}&slides=${slides}&contentline=${contentline}`}
        />
      </div>
    );
  }
}

export default ApiSwf;
