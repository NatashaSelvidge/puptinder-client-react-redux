import React, { Component } from "react";
import { connect } from "react-redux";
import TinderCard from "react-tinder-card";
import "../styling/CardContainer.css";
import swal from "sweetalert";

export class CardContainer extends Component {
  render() {
    const onSwipe = (direction, event) => {
      const dog = this.props.dogs;
      if (direction === "right") {
        swal("LIKED") && console.log(dog);
      } else {
        console.log("You swiped: " + direction);
      }
    };

    return (
      <div className="dogCard__cardContainer">
        {this.props.dogs.map((dog, i) => (
          <TinderCard key={i} className="swipe" onSwipe={onSwipe}>
            <div
              style={{ backgroundImage: `url(${dog.image_url})` }}
              className="card"
              preventswipe={["up", "down"]}
            >
              <h3>{dog.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs,
  };
};
export default connect(mapStateToProps)(CardContainer);
