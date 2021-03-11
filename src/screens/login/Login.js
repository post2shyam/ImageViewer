import React, { Component } from "react";
import "../login/Login.css";
import Header from "../../common/Header";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      usernameRequired: "dispNone",

      loginPasswordRequired: "dispNone",
      loginPassword: "",

      expectedUserName: "hello",
      expectedPwd: "world",

      instagramAccessToken:
        "IGQVJYZA28yYWhVZAFUxWlkzbkJZANC1iNy1RaGotMkIxRDVBVHA3NzZAWZAzJPU1ZAhVzNEY1hOMXdVUWxTUVBnR3lveUg1OFJtQ1R6TzRwR21mZAWluWW1ETmdyZAjkwWlpLOElZANHZAmd18yOVhlMTBsZAlRNVURoNW45SFhmMm9B",
    };
  }

  inputUsernameChangeHandler = (e) => {
    this.setState({ username: e.target.value });
  };

  inputLoginPasswordChangeHandler = (e) => {
    this.setState({ loginPassword: e.target.value });
  };

  loginClickHandler = () => {
    this.state.username === ""
      ? this.setState({ usernameRequired: "dispBlock" })
      : this.setState({ usernameRequired: "dispNone" });

    if (this.state.loginPassword === "") {
      document.getElementById("passwordHint").innerText = "required";
      this.setState({ loginPasswordRequired: "dispBlock" });
    } else {
      this.setState({ loginPasswordRequired: "dispNone" });
    }

    //If userId or password is empty dont proceed further
    if (this.state.username === "" || this.state.loginPassword === "") {
      return;
    }

    //If the userId and password are not the expected one, show error message
    if (
      this.state.username === this.state.expectedUserName &&
      this.state.loginPassword === this.state.expectedPwd
    ) {
      // Store the facebook token to session store
      sessionStorage.setItem("access-token", this.state.instagramAccessToken);
    } else {
      document.getElementById("passwordHint").innerText =
        "Incorrect username and/or password";
      this.setState({ loginPasswordRequired: "dispBlock" });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="login-page">
          <Card className="card">
            <CardContent>
              <h2>LOGIN</h2>
              <FormControl required>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input
                  className="input"
                  id="username"
                  type="text"
                  username={this.state.username}
                  onChange={this.inputUsernameChangeHandler}
                />
                <FormHelperText className={this.state.usernameRequired}>
                  <FormHelperText className={this.state.usernameRequired}>
                    <span className="red">required</span>
                  </FormHelperText>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <FormControl required>
                <InputLabel htmlFor="loginPassword">Password</InputLabel>
                <Input
                  className="input"
                  id="loginPassword"
                  type="password"
                  loginpassword={this.state.loginPassword}
                  onChange={this.inputLoginPasswordChangeHandler}
                />
                <FormHelperText className={this.state.loginPasswordRequired}>
                  <span id="passwordHint" className="red">
                    required
                  </span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <div className="login-button">
                <Link to="/home">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.loginClickHandler}
                  >
                    Login
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
