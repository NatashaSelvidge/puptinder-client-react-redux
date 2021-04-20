import React, { Component } from "react";
import { connect } from "react-redux";
import { addDog } from "../actions";
import "../styling/FormControl.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export class FormControl extends Component {
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
      <div className="FormControl__formDiv">
        <Form onSubmit={this.handleSubmit} className="formControl__form">
          <h2>Add a Pup!</h2>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <div>
              <Form.Control
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Enter the dogs name"
              />
            </div>
          </Form.Group>
          <br />
          <Form.Group controlId="formBasicPassword">
            <div>
              <Form.Label>Photo</Form.Label>
              <Form.Control
                type="text"
                id="photo"
                name="image_url"
                value={this.state.image_url}
                onChange={this.handleChange}
                placeholder="Enter the image URL"
              />
            </div>
          </Form.Group>
          <br />
          <Button className="btn-lg btn-block" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default connect(null, { addDog })(FormControl);
