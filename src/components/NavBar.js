import React from "react";
import { NavLink } from "react-router-dom";
import "../index.scss";

export default function NavBar() {
  return (
    <nav role="navigation" className="sidenav">
      <div>
        <NavLink to="/" exact>
          HELLO
        </NavLink>
      </div>
      <div>
        <NavLink to="/how-to">HOW TO</NavLink>
      </div>
      <div>
        <NavLink to="/story-word">WORD</NavLink>
      </div>
      <div>
        <NavLink to="/story-picture">PICTURE</NavLink>
      </div>
      <div>
        <NavLink to="/upload-picture">UPLOAD</NavLink>
      </div>
      <div>
        <NavLink to="/review">REVIEW</NavLink>
      </div>
    </nav>
  );
}
