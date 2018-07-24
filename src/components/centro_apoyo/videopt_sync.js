import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Popquiz from './popquiz';
import OverlayModal from '../shared/modal';

import { parse_times } from '../../globals';

const PopquizHeader = () => {
  // return (<img src="/images/evaluate.png" alt="Evaluúate" />);
  return (<img src="/images/popquiz.jpg" alt='Popquiz' />);
}

class VideoptSync extends Component {
  render() {
    const { current_slide, slide_times } = this.props;
    const current_slide_time = slide_times[current_slide];
    const enablePopquiz = (current_slide_time && current_slide_time[2] === 3);
    return (
      <Fragment>
        { enablePopquiz
          ? <OverlayModal className="modal-lg" header={<PopquizHeader />} callback={() => this.props.changeSlide(current_slide+1)}><Popquiz k211id={current_slide_time[3]} /></OverlayModal>
          : ''
        }
      </Fragment>
    );
  }
}

function mapStateToProps(state){
  return {
    slide_times: parse_times(state.videopts.single.links)
  }
}

export default connect(mapStateToProps)(VideoptSync);
