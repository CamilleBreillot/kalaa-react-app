import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            SmartCollect
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Magasin
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/siege">
                  Siège
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
