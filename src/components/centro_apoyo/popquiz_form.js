import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { submitPopquiz } from '../../actions/popquiz';

class PopquizForm extends Component {
  onSubmit(values){
    const { popquiz } = this.props;
    values['fo_continuar'] = 't';
    this.props.submitPopquiz(popquiz.k211id, values, () => {
      this.props.showPopquizResultado()
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {this.renderPreguntas()}
        <hr />
        <button type="submit" className="btn btn-primary">Continuar</button>
      </form>
    );
  }

  renderPreguntas(){
    const { lista_preguntas } = this.props;
    return _.map(lista_preguntas, (pregunta, i) => {
      const seleccion = (pregunta.i80tipocuestion === 'S');
      return (
        <div key={i}>
          <h5>Pregunta: {i}. {pregunta.c80pregunta}</h5>
          { pregunta.m80explicacion ? <p>{pregunta.m80explicacion}</p> : '' }
          { seleccion ? this.renderSeleccion(pregunta) : this.renderAbierta(pregunta) }
        </div>
      );
    });
  }

  renderSeleccion(pregunta){
    const multiple = (pregunta.i80esmultiple === 'M');
    return (
      <Fragment>
        <p><i>{ multiple ? 'Selecciona todas las que apliquen' : 'Selecciona una opción' }</i></p>
        <div className="form-group">
          { this.renderOpciones(pregunta.i80esmultiple, pregunta.lista_opcion) }
        </div>
      </Fragment>
    );
  }

  renderOpciones(i80esmultiple, lista_opcion){
    const letras = ' abcdefghijklmnopqrstuvwxyz'.split('');
    const field_type = (i80esmultiple === 'U') ? 'radio' : 'checkbox';
    return _.map(lista_opcion, (opcion, i) => {
      const indice = letras[opcion.n81numero];
  		const value = (i80esmultiple === 'U') ? opcion.n81numero : 'S';
  		const name = (i80esmultiple === 'U') ? `fo_pregunta_${opcion.k80id}_CHECK[0]` : `fo_pregunta_${opcion.k80id}_CHECK['${opcion.n81numero}']`;
  	  // const checked = opcion.CHECK !== '' ? 'checked' : '';
      return (
        <div key={i} className="form-check">
          <Field component='input' name={name} id={`fo_pregunta_${opcion.k80id}_${indice}`} type={field_type} value={value} className="form-check-input"  />
          <label htmlFor={`fo_pregunta_${opcion.k80id}_${indice}`} className="form-check-label">{indice}. {opcion.m81texto}</label>
        </div>
      )
    })
  }

  renderAbierta(pregunta){
    return (
      <Fragment>
        <p><i>Abierta</i></p>
      </Fragment>
    );
  }
}

function mapStateToProps(state){
  return {
    popquiz: state.popquiz.single,
    lista_preguntas: state.popquiz.single.lista_preguntas
  }
}

export default reduxForm({
  form: 'PopquizForm'
})(connect(mapStateToProps, { submitPopquiz })(PopquizForm));
