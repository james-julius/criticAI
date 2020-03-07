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
            <div id="modal">
                'Surprise motherfuckers!
            </div>
        )
    }
}

export default Modal;