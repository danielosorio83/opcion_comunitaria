import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

class VideoptLinks extends Component {
  constructor(props){
    super(props);
    this.state = {
      current_slide: this.props.current_slide,
      slide_times: this.props.slide_times
    }
  }

  renderLinks(){
    const { links } = this.props;
    return links.map( (link, i) => {
      return (
        <button key={i} className="list-group-item list-group-item-action list-group-item-secondary" onClick={() => { this.seek(i) }}>
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

  seek(i){
    console.log('link: ' + i);
  }
}

const mapStateToProps = (state) => {
  return {
    current_slide: state.current_slide,
    slide_times: state.slide_times
  }
};

export default connect(mapStateToProps)(VideoptLinks);
