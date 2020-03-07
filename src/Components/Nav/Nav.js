import React from 'react';
import './Nav.scss';
import Logo from '../../Resources/logo.png';
import flipLogo from '../../Resources/logoflip.png';
import { useGlobalState } from '../../Hooks/useGlobalState';

function Nav(props) {
    const [inverseColors, setInverseColors] = useGlobalState('inverseColor');
    const colorSwitcher = ['rgba(240, 10, 10)','rgb(240, 240, 240)'];
    let styles = {
        backgroundColor: inverseColors ? colorSwitcher[0] : colorSwitcher[1]
    };
    return (
        <div id ="nav" style={styles}>
           <img src={inverseColors ? flipLogo : Logo} alt="Welcome to RestaurantSelector" />
        </div>
    )
};

export default Nav;