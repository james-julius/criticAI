import React from 'react';
import '../Master.scss';
import Logo from '../Resources/Assets/logo.png';
import flipLogo from '../Resources/Assets/logoflip.png';
import { useGlobalState } from '../Hooks/useGlobalState';

export default function Nav() {
    const [inverseColors, setInverseColors] = useGlobalState('inverseColor');
    const colorSwitcher = ['rgba(240, 10, 10)','rgb(240, 240, 240)'];

    let styles = {backgroundColor: inverseColors ? colorSwitcher[0] : colorSwitcher[1]};

    return (
        <div id ="nav" style={styles}>
           <img src={inverseColors ? flipLogo : Logo} alt="Welcome to RestaurantSelector" />
        </div>
    )
};