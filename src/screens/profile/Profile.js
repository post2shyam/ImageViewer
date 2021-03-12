import React, { Component } from "react";
import Header from "../../common/Header";
import "./Profile.css";

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Header
            isLoggedIn={true}
            profile_picture={this.state.profilePic}
            list={this.state.searchPost}
            callbackFromHome={this.filteredListHandler}
          />
        </div>
        <div className="container"></div>
      </div>
    );
  }
}

export default Profile;
