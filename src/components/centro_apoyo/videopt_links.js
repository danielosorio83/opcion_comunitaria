import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

class VideoptLinks extends Component {
  renderLinks(){
    const { links, current_slide, changeSlide } = this.props;
    return links.map( (link, i) => {
      let active = (current_slide === i ? 'active' : '');
      return (
        <button key={i} className={`list-group-item list-group-item-action list-group-item-secondary ${active}`} onClick={() => { changeSlide(i) }}>
          <small>{link.c211link}</small>
          <FontAwesomeIcon icon={faCaretRight} pull="right" />
        </button>
      )
    })
  }

  render() {
    return (
      <Fragment>
        <hr />
        {
          this.props.links
            ?
              <Fragment>
                <p>Enlaces de la Presentación:</p>
                <div className="list-group videopt-links">
                  {this.renderLinks()}
                </div>
              </Fragment>
            :
            ''
        }
      </Fragment>
    );
  }
}

function mapStateToProps(state){
  return {
    links: state.videopts.single.links
  }
}

export default connect(mapStateToProps)(VideoptLinks);
