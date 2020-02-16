import React from 'react';
import './Nav.scss';
import Logo from '../../Resources/logo.png';
import flipLogo from '../../Resources/logoflip.png';

function Nav(props) {
    const colorSwitcher = ['rgb(240, 240, 240)','rgba(240, 10, 10)'];
    let styles = {
        backgroundColor: colorSwitcher[props.colorState]
    };
    return (
        <div id ="nav" style={styles}>
           <img src={props.colorState ? flipLogo : Logo} alt="Welcome to RestaurantSelector" />
        </div>
    )
};

export default Nav;