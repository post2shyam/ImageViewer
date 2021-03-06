import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";

import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <div className="app-header">
        <div className="logo">Image Viewer</div>
        {this.props.isLoggedIn ? (
          <div className="parent">
            <div className="search" id="loggedin-section">
              <SearchIcon />
              <Input disableUnderline={true} placeholder="Search..." />
            </div>
            <IconButton>
              <img src={this.props.imageUrl} alt="sj"></img>
            </IconButton>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Header;
