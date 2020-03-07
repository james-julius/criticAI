import React from 'react';
import './Menu.scss';

function Menu(props) {
    const handleClick = () => {
        props.toggleMenu();
    }

    return (
        <div id="menu">
            <button onClick ={handleClick} className={props.active ? 'hamburger hamburger--arrow is-active' : 'hamburger hamburger--arrow'} type="button">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>
        </div>
    )
}

export default Menu;