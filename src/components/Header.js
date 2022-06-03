import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Logo />
      </div>
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => isActive && "nav-active"}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive && "nav-active"}
          >
            <li>A propos</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;