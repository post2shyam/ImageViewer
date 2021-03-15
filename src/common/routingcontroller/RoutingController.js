import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../../screens/login/Login";
import Home from "../../screens/home/Home";
import Profile from "../../screens/profile/Profile";

class RoutingController extends Component {
  constructor() {
    super();
    this.baseUrl = "https://graph.instagram.com/";
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/home"
            render={(props) => <Home baseUrl={this.baseUrl} />}
          />
          <Route
            exact
            path="/profile"
            render={(props) => <Profile baseUrl={this.baseUrl} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default RoutingController;
