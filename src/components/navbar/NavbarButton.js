import React from "react";
import { NavLink } from "react-router-dom";

const NavbarButton = ({ links, iconName, name }) => (
  <NavLink exact to={links} className="navbar-button" activeClassName="navbar-button-active">
    <i className={iconName}></i>
    <span className="navbar-button-name">{name.toUpperCase()}</span>
  </NavLink>
);

export default NavbarButton;
