import React, { Component } from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Login from "../../screens/login/Login"
import Home from "../../screens/home/Home"

class RoutingController extends Component {
  render() {
    return (
      <Router>
          <Route exact path='/' render={(props)=> <Login/>}></Route>
          <Route exact path='/home' render={(props)=> <Home/>}></Route>
      </Router>
    );
  }
}

export default RoutingController;