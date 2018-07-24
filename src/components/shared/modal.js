import React, { Component, Fragment } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from '../../store';

class OverlayModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    if (this.state.modal){
      this.props.callback();
    }
  }

  render() {
    return (
      <Fragment>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop='static' keyboard={false}>
          <ModalHeader toggle={this.toggle}>{this.props.header}</ModalHeader>
          <ModalBody>
            {this.props.children}
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }

  // componentDidMount() {
  //   this.modalTarget = document.createElement('div');
  //   this.modalTarget.className = 'modal fade show';
  //   this.modalTarget.tabIndex = '-1';
  //   this.modalTarget.role = 'dialog';
  //   this.modalTarget.id = 'modal';
  //   document.body.appendChild(this.modalTarget);
  //   document.body.classList.add('modal-open');
  //   this._render();
  // }
  //
  // componentWillUpdate() {
  //   this._render();
  // }
  //
  // componentWillUnmount() {
  //   ReactDOM.unmountComponentAtNode(this.modalTarget);
  //   document.body.removeChild(this.modalTarget);
  //   document.body.classList.remove('modal-open');
  // }
  //
  // _render() {
  //   ReactDOM.render(
  //     <Provider store={store}>
  //       <div className="modal-dialog" role="document">
  //         <div className="modal-content">
  //           <div className="modal-header">
  //             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
  //               <span aria-hidden="true">&times;</span>
  //             </button>
  //           </div>
  //           <div className="modal-body">
  //             {this.props.children}
  //           </div>
  //         </div>
  //       </div>
  //     </Provider>,
  //     this.modalTarget
  //   );
  // }
  //
  // render() {
  //   return <noscript />;
  // }
}

export default OverlayModal;
