import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getDogs } from "./actions/index";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import CenterContainer from "./components/CardContainer";
import ErrorPage from "./components/ErrorPage";
import Form from "./components/FormControl";

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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/dogs" component={CenterContainer} />
          <Route exact path="/dogs/new" component={Form} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
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
