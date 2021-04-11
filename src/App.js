import React from "react";
// import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import CenterContainer from "./components/CenterContainer";
// import Form from "./components/Form";
import ErrorPage from "./components/ErrorPage";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dogs" component={CenterContainer} />
          <Route component={ErrorPage} />
        </Switch>
        <br />
        <Footer />
      </Router>
    );
  }
}

export default App;
