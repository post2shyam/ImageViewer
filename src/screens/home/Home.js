import React, { Component } from "react";
import Header from "../../common/Header";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      profilePic: "",
      info: [],
    };
  }

  componentDidMount() {
    let data = null;
    let xhr = new XMLHttpRequest();
    let that = this;
    const accessToken = sessionStorage.getItem("access-token");
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log("Response:\n" + this.responseText);
        that.setState({ info: JSON.parse(this.responseText) });
      }
    });

    //API-1: https://graph.instagram.com/me/media?fields=id,caption&access_token=YourAccessToken
    xhr.open(
      "GET",
      this.props.baseUrl +
        "me/media?fields=id,caption&access_token=" +
        accessToken
    );
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.send(data);
  }

  getInstagramImage() {
    return "https://www.upgrad.com/favicon.ico";
  }

  render() {
    return (
      <div>
        <Header isLoggedIn={true} imageUrl={this.getInstagramImage()} />
      </div>
    );
  }
}

export default Home;
