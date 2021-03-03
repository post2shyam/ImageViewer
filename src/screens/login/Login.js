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

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      usernameRequired: "dispNone",

      loginPasswordRequired: "dispNone",
      loginPassword: "",
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
    this.state.loginPassword === ""
      ? this.setState({ loginPasswordRequired: "dispBlock" })
      : this.setState({ loginPasswordRequired: "dispNone" });

    //TODO: Invoke facebook authentication to fetch token
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
                  <span className="red">required</span>
                </FormHelperText>
              </FormControl>
              <br />
              <br />
              <div className="login-button">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.loginClickHandler}
                >
                  Login
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

export default Login;
