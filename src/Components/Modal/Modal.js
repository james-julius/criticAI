import React from 'react';
import './Modal.scss';

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggleModal();
    }

    render() {
        return (
            <div id="modal" style={{display: this.props.modalBool ? 'static': 'none'}}>
                <span id="hamburgerIcon" onClick={this.handleClick} ></span>
                {this.props.modalBool ? 'Surprise motherfuckers!': null}
            </div>
        )
    }
}

export default Modal;