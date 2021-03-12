import React, { Component } from "react";
import Header from "../../common/Header";
import { useHistory } from "react-router-dom";
import "./Profile.css";

const NavigateBackToLoginPage = (props) => {
  const history = useHistory();
  history.push("/");
  return "";
};

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {sessionStorage.getItem("access-token") !== null ? (
          <div>
            <Header
              isLoggedIn={true}
              profile_picture={this.state.profilePic}
              list={this.state.searchPost}
              callbackFromHome={this.filteredListHandler}
            />
            <div className="container"></div>
          </div>
        ) : (
          <NavigateBackToLoginPage />
        )}
      </div>
    );
  }
}

export default Profile;
