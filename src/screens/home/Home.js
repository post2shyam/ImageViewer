import React, { Component } from "react";
import Header from "../../common/Header";

class Home extends Component {
  componentDidMount() {
    var instagramAccessToken = sessionStorage.getItem("access-token");
    console.log(instagramAccessToken);
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={true} />
      </div>
    );
  }
}

export default Home;
