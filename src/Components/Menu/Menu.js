import React from 'react';
import './Menu.scss';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hamburgerActive: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick() {
        this.props.toggleMenu();
        this.setState({hamburgerActive: !this.state.hamburgerActive})
    }
    
    render() {return (
        <div id="menu">
            <button onClick ={this.handleClick} class={this.state.hamburgerActive ? 'hamburger hamburger--arrow is-active' : 'hamburger hamburger--arrow'} type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    )}
}

export default Menu;