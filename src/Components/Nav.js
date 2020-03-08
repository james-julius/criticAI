import React from 'react';
import '../Master.scss';
import { Link } from 'react-router-dom';
import Logo from '../Resources/Assets/logo.png';
import flipLogo from '../Resources/Assets/logoflip.png';
import { useGlobalState } from '../Hooks/useGlobalState';

export default function Nav() {
    const [menuActive, setMenuActive] = useGlobalState('menuActive');
    const [inverseColors, setInverseColors] = useGlobalState('inverseColor');
    const colorSwitcher = ['rgba(240, 10, 10)','rgb(240, 240, 240)'];

    function clickHandler() {
        setMenuActive(!menuActive); 
        setInverseColors(!inverseColors)
    }

    let styles = {backgroundColor: inverseColors ? colorSwitcher[0] : colorSwitcher[1]};

    return (
        <div id ="nav" style={styles}>
            <div id="menubutton">
                <button onClick={clickHandler} className={menuActive ? 'hamburger hamburger--arrow is-active' : 'hamburger hamburger--arrow'} type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <Link id="logolink" to="/">
               <img src={inverseColors ? flipLogo : Logo} alt="CriticAI" />
            </Link>
        </div>
    )
};