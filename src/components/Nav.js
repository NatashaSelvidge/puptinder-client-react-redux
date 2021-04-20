import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <ul>
          <li>
            <Link to="/" className="Nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="Nav__link">
              About
            </Link>
          </li>
          <li>
            <Link to="/dogs" className="Nav__link">
              Dogs
            </Link>
          </li>
          <li>
            <Link to="/dogs/new" className="Nav__link">
              Create Dog
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
