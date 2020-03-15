import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import dotenv from "dotenv";

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
        console.log(res)
    }
    // Login Fail
    responseFail = (err) => {
        console.log(err);
    }

    render() {
        console.log(process.env.GAPI)
        return (
            
            <Container>
                <GoogleLogin
                    clientId={process.env.G_CLIENT_ID}
                    buttonText="Google"
                    onSuccess={this.responseGoogle}   
                    onFailure={this.responseFail}
                />
            </Container>
        );
    }
}

export default Login;