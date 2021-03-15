import React, { Component } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../common/Header";
import InfoCard from "../../common/infocard/InfoCard";
import profilePic from "../../assets/images/profile_pic.jpg";
import "./Home.css";

const NavigateBackToLoginPage = (props) => {
  const history = useHistory();
  history.push("/");
  return "";
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      profilePic: profilePic,
      instagramPosts: [],
      searchPost: [],
    };
  }

  //REST apis to be invoked when this screen renders.
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
          return that.getImages(eachItem);
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
          instagramPostDetails.likesCount = Math.floor(Math.random() * 10);
          instagramPostDetails.profile_url = that.state.profilePic;
          //Update the current collection of insta posts
          let currentInstaPostCollection = that.state.instagramPosts.slice();
          currentInstaPostCollection.push(instagramPostDetails);

          that.setState({
            instagramPosts: currentInstaPostCollection,
            searchPost: currentInstaPostCollection,
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

  filteredListHandler = (filteredPosts) => {
    this.setState({ instagramPosts: filteredPosts });
  };

  render() {
    return (
      <div>
        {sessionStorage.getItem("access-token") !== null ? (
          <div>
            <div>
              <Header
                isLoggedIn={true}
                showSearchBar={true}
                profile_picture={this.state.profilePic}
                list={this.state.searchPost}
                callbackFromHome={this.filteredListHandler}
              />
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
        ) : (
          <NavigateBackToLoginPage />
        )}
      </div>
    );
  }
}

export default Home;
