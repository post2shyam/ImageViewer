import React, { Component } from "react";
import Header from "../../common/Header";
import InfoCard from "../../common/infocard/InfoCard";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      profilePic: "",
      instagramPosts: [],
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
        let info = JSON.parse(this.responseText).data;
        info.map((eachItem) => {
          that.getImages(eachItem);
        });
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

  getImages(info) {
    let data = null;
    let xhr = new XMLHttpRequest();
    let that = this;
    let accessToken = window.sessionStorage.getItem("access-token");
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log("Response:\n" + this.responseText);
        let details = JSON.parse(this.responseText);
        if (details.media_type === "IMAGE") {
          //Prepare the final object to update the home page info
          let instagramPostDetails = {};
          instagramPostDetails.id = info.id;
          instagramPostDetails.caption = info.caption;
          instagramPostDetails.media_url = details.media_url;
          instagramPostDetails.username = details.username;
          instagramPostDetails.timestamp = new Date(details.timestamp);
          instagramPostDetails.profile_url =
            "https://instagram.fblr1-3.fna.fbcdn.net/v/t51.2885-19/11910245_492478310920718_1225190855_a.jpg?_nc_ht=instagram.fblr1-3.fna.fbcdn.net&_nc_ohc=0fVS9mzgF0cAX-mC0KZ&oh=f47edc5cb63b6bde88854ea72eb3ceaa&oe=606F6032";

          //Update the current collection of insta posts
          let currentInstaPostCollection = that.state.instagramPosts.slice();
          currentInstaPostCollection.push(instagramPostDetails);
          that.setState({
            instagramPosts: currentInstaPostCollection,
            profilePic: instagramPostDetails.profile_url,
          });
        }
      }
    });

    //graph.instagram.com/17895695668004550?fields=id,media_type,media_url,username,timestamp&access_token=YourAccessToken
    xhr.open(
      "GET",
      this.props.baseUrl +
        info.id +
        "?fields=id,media_type,media_url,username,timestamp&access_token=" +
        accessToken
    );
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(data);
  }

  render() {
    return (
      <div>
        <div>
          <Header isLoggedIn={true} profile_picture={this.state.profilePic} />
        </div>
        <div className="container">
          {/* Body of Home screen */}
          {this.state.instagramPosts.map((entry) => (
            <div>
              <InfoCard {...entry} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
