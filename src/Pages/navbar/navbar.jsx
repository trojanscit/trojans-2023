import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

function Navbar() {
  return (
    <div className="nav_container">
      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
      />
      <label className="nav-ico" htmlFor="menu-icon" />
      <nav className="nav">
        <ul className="pt-5">
          <li className="nav-lst">
            <a className="nvg-opt" href="/" data-text="Home">
              Home
            </a>
          </li>
          <li className="nav-lst">
            <a className="nvg-opt" href="/events" data-text="Events">
              Events
            </a>
          </li>
          <li className="nav-lst">
            <a className="nvg-opt" href="/workshop" data-text="Workshop">
              Workshop
            </a>
          </li>
          <li className="nav-lst">
            <a className="nvg-opt" href="/sponsors" data-text="Sponsors">
              Sponsors
            </a>
          </li>

          <li className="nav-lst">
            <a className="nvg-opt" href="/registration" data-text="Register">
              Register
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
