import React, { Component } from "react";
import { connect } from "react-redux";
import Dog from "./Dog";

export class CenterContainer extends Component {
  render() {
    const dogs = this.props.dogs.map((dog, i) => (
      <Dog key={i} name={dog.name}  />
    ));
    return <div>{dogs}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    dogs: state.dogs,
  };
};
export default connect(mapStateToProps)(CenterContainer);
