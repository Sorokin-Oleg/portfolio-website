import React, {Component} from 'react';

class NavbarButton extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <button className='navbar-button'>
                <i className={this.props.iconName}></i>
                <span className='navbar-button-name'>{this.props.name.toUpperCase()}</span>
            </button>
        )
    }
}

export default NavbarButton;