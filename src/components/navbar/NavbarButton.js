import React, {Component} from 'react';
import { HashRouter as Route, NavLink } from "react-router-dom";

const NavbarButton = (props) => {
    return (
        <NavLink exact to={props.links} className='navbar-button' activeClassName='navbar-button-active'>
            <i className={props.iconName}></i>
            <span className='navbar-button-name'>{props.name.toUpperCase()}</span>
        </NavLink>
    );
};

export default NavbarButton;