import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`

class LoginConsumer extends React.Component {
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
        this.props.abcd.bbb.onLogin();
        this.props.history.push('/');

    }
    // Login Fail
    responseFail = (err) => {
        console.log(err);
    }
    // 여기서 로그인 처리를 해버렸!
    render(){
        console.log(`this.state in /loginConsumer :   ` + JSON.stringify(this.state));
        console.log(`this.props in /loginConsumer:` + JSON.stringify(this.props));
        console.log(`this.props.abcd.bbb  `+ JSON.stringify(this.props.abcd.bbb));
        console.log(`this.props.abcd.onLogin:  `+ this.props.abcd.onLogin);
        return(
            <Container>
                    <GoogleLogin
                        clientId="32559549898-eejrqkr1omcv2c1j6ejk5hp6ekitgpn2.apps.googleusercontent.com"
                        buttonText="Google Login"
                        onSuccess={this.responseGoogle}   
                        onFailure={this.responseFail}
                    />
            </Container>
        )
    }
}

export default LoginConsumer;