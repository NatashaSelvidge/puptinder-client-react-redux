import React, { Component } from "react";

export class Dog extends Component {
  render() {
    const { name, image_url } = this.props;
    return (
      <div>
        <img src={image_url} alt={name} />
        <p>{name}</p>
      </div>
    );
  }
}

export default Dog;
