import React from 'react';
import './Nav.scss';

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
           <ul>
             <li id="hamburger" onClick={this.handleClick}>|||</li>
             <li id="title">AI Food Critic</li>
           </ul>
        </div>
    )}
};

export default Nav;