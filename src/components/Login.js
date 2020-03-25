import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import dotenv from "dotenv";
import { withRouter } from "react-router-dom";
import Store from "../Store/store";
import LoginContainer from "./LoginContainer";

dotenv.config();


const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }
    // Google Login
    responseGoogle = (res) => {
        this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            provider: "google"
        });
        this.props.abcd.onLogin();
        this.props.history.push('/');

    }
    // Login Fail
    responseFail = (err) => {
        console.log(err);
    }

    render() {
        console.log(`this.props in /login :   ` + JSON.stringify(this.props));
        return (
            <>
              <LoginContainer bbb={this.props} />
            </>
        );
    }
}

export default withRouter(Login);