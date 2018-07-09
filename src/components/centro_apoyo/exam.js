import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ExamItem from './exam_item';

import Error from '../shared/error';
import Loading from '../shared/loading';
import HeaderTitle from '../shared/header_title';

import { findExam, destroyExam } from '../../actions/exams';
import { BASEDIR } from '../../routes/centro_apoyo';

const queryString = require('query-string');

class Exam extends Component {
  componentWillMount(){
    this.props.findExam(this.props.match.params.id);
  }

  pathToBack(){
    const params = queryString.parse(this.props.location.search);
    const path = params.lup ? '/lups' + params.lup : '/exams';
    return BASEDIR + path;
  }

  destroyExam(){
    this.props.destroyExam(this.props.match.params.id)
      .then( () => {
        this.props.history.push(this.pathToBack());
      })
  }

  render() {
    const { exam, error } = this.props;
    if (typeof(error) !== 'undefined'){
      return <Error data={error} title="Examenes" path={this.pathToBack()} />;
    }
    if (!exam){
      return <Loading />;
    }

    return (
      <div>
        <HeaderTitle title="Examenes" path={this.pathToBack()} />
        <ExamItem exam={exam} />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    exam: state.exams.single,
    error: state.exams.error
  }
}

export default connect(mapStateToProps, { findExam, destroyExam })(withRouter(Exam));
