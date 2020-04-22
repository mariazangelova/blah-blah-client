import React from "react";
import { NavLink } from "react-router-dom";
import "../index.scss";

export default function NavBar() {
  return (
    <nav role="navigation" className="sidenav">
      <div>
        <NavLink to="/" exact to="/">
          HOW TO
        </NavLink>
      </div>
      <div>
        <NavLink to="/story-word">WORD STORY</NavLink>
      </div>
      <div>
        <NavLink to="/story-picture">PICTURE</NavLink>
      </div>
      <div>
        <NavLink to="/upload-picture">UPLOAD</NavLink>
      </div>
      <div>
        <button style={{ background: "none", border: "none" }}>
          <img
            class="image"
            src="https://cdn2.iconfinder.com/data/icons/chat-bot-linear-outline/300/215815814Untitled-3-512.png"
          />
        </button>
      </div>
    </nav>
  );
}
