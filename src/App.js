import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <div className="App">
          <h1>Hello World</h1>
        </div>
      </Router>
    );
  }
}

export default App;
