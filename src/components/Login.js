import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import dotenv from "dotenv";
import path from "path";
import { withRouter } from "react-router-dom";

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
        console.log(res);
        this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            provider: "google"
        });
        this.props.history.push('/');
        this.props.onLogin();   
    }
    // Login Fail
    responseFail = (err) => {
        console.log(err);
    }

    render() {
        console.log(`this.prop:` + JSON.stringify(this.props));
        console.log(process.env.BB);
        console.log("Is env working?")
        return (
            <Container>
                <GoogleLogin
                    clientId="32559549898-eejrqkr1omcv2c1j6ejk5hp6ekitgpn2.apps.googleusercontent.com"
                    buttonText="Google Login"
                    onSuccess={this.responseGoogle}   
                    onFailure={this.responseFail}
                />
            </Container>
        );
    }
}

export default withRouter(Login);