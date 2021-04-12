import React, { Component } from "react";
import { connect } from "react-redux";
import { addDog } from "../actions";

export class Form extends Component {
  state = {
    name: "",
    image_url: "",
    status: "undecided",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.image_url]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addDog(this.state, this.props.history);
  };
  render() {
    return (
      <div>
        <h3>Add A Pup</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name </label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <div>
            <label htmlFor="photo">Photo </label>
            <input
              type="text"
              id="photo"
              name="image_url"
              value={this.state.image_url}
              onChange={this.handleChange}
            />
          </div>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addDog })(Form);
