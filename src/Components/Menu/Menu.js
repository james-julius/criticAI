import React, {useState} from 'react';
import './Menu.scss';

function Menu(props) {
    const [burgerActive, setBurgerActive] = useState(false);

    const handleClick = () => {
        props.toggleMenu();
        setBurgerActive(!burgerActive);
    }
    const colorSwitcher = ['rgba(240, 10, 10, 0.8)','rgb(240, 240, 240)'];
    let styles = {
        backgroundColor: colorSwitcher[props.colorState]
    };

    return (
        <div id="menu" style={styles}>
            <button style={styles} onClick ={handleClick} class={burgerActive ? 'hamburger hamburger--arrow is-active' : 'hamburger hamburger--arrow'} type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    )
}

export default Menu;