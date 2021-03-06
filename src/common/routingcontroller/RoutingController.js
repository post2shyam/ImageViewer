import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../../screens/login/Login";
import Home from "../../screens/home/Home";

class RoutingController extends Component {
  constructor() {
    super();
    this.baseUrl = "https://graph.instagram.com/";
  }

  render() {
    return (
      <Router>
        <Route exact path="/" render={(props) => <Login />}></Route>
        <Route
          exact
          path="/home"
          render={(props) => <Home baseUrl={this.baseUrl} />}
        ></Route>
      </Router>
    );
  }
}

export default RoutingController;
