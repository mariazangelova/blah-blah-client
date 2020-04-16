import React from "react";
import { NavLink } from "react-router-dom";
import "../index.scss";

export default function NavBar() {
  return (
    <nav role="navigation" className="sidenav">
      <div>
        <NavLink to="/" exact to="/">
          HOME
        </NavLink>
      </div>
      <div>
        <NavLink to="/story-word">WORD STORY</NavLink>
      </div>
      <div>
        <NavLink to="/story-picture">PICTURE STORY</NavLink>
      </div>
    </nav>
  );
}
