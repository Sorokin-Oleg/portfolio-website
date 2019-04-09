import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class NavbarButton extends React.Component {

    render() {
        return (
            <NavLink exact to={this.props.links} className='navbar-button' activeClassName='navbar-button-active'>
                <i className={this.props.iconName}></i>
                <span className='navbar-button-name'>{this.props.name.toUpperCase()}</span>
            </NavLink>
        )
    }
}

export default NavbarButton;