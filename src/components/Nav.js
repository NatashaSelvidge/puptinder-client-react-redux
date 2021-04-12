import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Nav extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dogs">Dogs</Link>
        </li>
        <li>
          <Link to="/dogs/new">Create Dog</Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
