import React, {Component} from 'react';

class NavbarButton extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        let buttonActive = this.props.active ? {color: '#fff200'} : {color: '#999999'};
        
        return (
            <button className='navbar-button' style={buttonActive} onClick={this.props.onClick}>
                <i className={this.props.iconName}></i>
                <span className='navbar-button-name'>{this.props.name.toUpperCase()}</span>
            </button>
        )
    }
}

export default NavbarButton;