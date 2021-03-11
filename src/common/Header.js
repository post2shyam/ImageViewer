import React, { Component } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import "./Header.css";

const StyledMenu = withStyles({
  paper: {
    border: "4px",
    backgroundColor: "#ededed",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {},
}))(MenuItem);

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    };
  }

  //function to open the dropdown menu
  openHandler = (e) => {
    this.setState({ type: e.currentTarget });
  };

  //function to close the dropdown menu
  closeHandler = () => {
    this.setState({ type: null });
  };

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
              <img
                className="icon-button"
                src={this.props.profile_picture}
                onClick={this.openHandler}
                alt="pic"
              />
            </IconButton>
            <StyledMenu
              id="customized-menu"
              anchorEl={this.state.type}
              keepMounted
              open={Boolean(this.state.type)}
              onClose={this.closeHandler}
            >
              <StyledMenuItem>
                <ListItemText
                  primary={
                    <Typography type="body2" style={{ fontWeight: "bold" }}>
                      My Account
                    </Typography>
                  }
                />
              </StyledMenuItem>
              <hr style={{ marginLeft: 15, marginRight: 15 }} />
              <StyledMenuItem>
                <Typography type="body2" style={{ fontWeight: "bold" }}>
                  Logout
                </Typography>
              </StyledMenuItem>
            </StyledMenu>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default Header;
