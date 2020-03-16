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
    }
    // Login Fail
    responseFail = (err) => {
        console.log(err);
    }

    render() {
        console.log(process.env.BB);
        console.log("Is env working?")
        return (
            <Container>
                <GoogleLogin
                    clientId=""
                    buttonText="Google Login"
                    onSuccess={this.responseGoogle}   
                    onFailure={this.responseFail}
                />
            </Container>
        );
    }
}

export default withRouter(Login);