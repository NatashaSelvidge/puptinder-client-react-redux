import React, { Component } from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../App.css";
import { Animated } from "react-animated-css";
export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Jumbotron className="home__Jumbotron">
          <div className="home__content">
            <h1>Find your new furry family member!</h1>
            <Animated
              animationIn="bounceInLeft"
              isVisible={true}
            >
              <h3>Swipe right on the pups you like. </h3>
            </Animated>
            <p>
              <Link to="/dogs">
                <Button className="home__button">DOGS</Button>
              </Link>
            </p>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
