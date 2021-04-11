import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
<<<<<<< Updated upstream
import Nav from "./components/Nav";
=======
import { getDogs } from "./actions/index";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import CenterContainer from "./components/CenterContainer";
import ErrorPage from "./components/ErrorPage";
import Form from "./components/Form";
>>>>>>> Stashed changes

class App extends React.Component {
  componentDidMount() {
    this.props.getDogs();
  }
  render() {
    if (this.props.loading) {
      return <h3>LOADING...</h3>;
    }

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
const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { getDogs })(App);
