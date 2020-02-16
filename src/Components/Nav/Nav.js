import React from 'react';
import './Nav.scss';
import Logo from '../../Resources/logo.png';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggleModal();
    }

    render() {return (
        <div id ="nav">
           <img src={Logo} alt="Welcome to RestaurantSelector" />
        </div>
    )}
};

export default Nav;