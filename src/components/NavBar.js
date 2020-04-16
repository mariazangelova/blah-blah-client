import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";

export default function NavBar() {
  return (
    <nav role="navigation" className="nav">
      <ul>
        <li id="nav-link">
          <NavLink to="/" exact to="/">
            HOME
          </NavLink>
        </li>
        {/* <li id="nav-link">
          <NavLink to="/">
        </NavLink>
        </li>
        <li id="nav-link">
          <NavLink to="/">
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
}
