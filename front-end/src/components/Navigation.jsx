/* Our NavBar.  Needs to be fixed as it looks like shit. */

import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Neobay
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/about">
                    About
                    <span className="sr-only">(current)</span>
                  </NavLink>
                <li>
                  <NavLink className="nav-link" to="/items">
                    Items
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/login">
                    Login
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/register">
                    Register
                    <span className="sr-only">(current)</span>
                  </NavLink>
                </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;