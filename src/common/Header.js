import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="app-header">
        <div className="logo">Image Viewer</div>
        <div className="search">
          <SearchIcon />
          <InputBase placeholder="Search..."></InputBase>
        </div>
      </div>
    );
  }
}

export default Header;
