import React from 'react';
import '../Master.scss';
import { useGlobalState } from '../Hooks/useGlobalState';

function Menu() {
    const [menuActive, setMenuActive] = useGlobalState('menuActive');
    const [inverseColors, setInverseColors] = useGlobalState('inverseColor');

    function clickHandler() {
        setMenuActive(!menuActive); 
        setInverseColors(!inverseColors)
    }

    return (
        <div id="menu">
            <button onClick={clickHandler} className={menuActive ? 'hamburger hamburger--arrow is-active' : 'hamburger hamburger--arrow'} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
    )
}

export default Menu;