import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.toggleSidebar();
    }

    render() {
        return (
            <div id="sidebar">
                <span id="hamburgerIcon" onClick={this.handleClick}></span>
                Surprise motherfuckers!
            </div>
        )
    }
}

export default Sidebar;