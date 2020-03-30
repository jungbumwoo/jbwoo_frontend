import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
`

const saveLogin = gql`
    mutation{
        createUser(
            id:"",
            name:"",
            provider:"",
            email:""
        ){
            id,
            name,
            provider,
            email
        }
    }
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
        this.doSignUp();
    }
    // Login Fail
    responseFail = (err) => {
        console.log(err);
    }
    doSignUp = () => {
        const { id, name, provider } = this.state;

        window.sessionStorage.setItem('id',id);
        window.sessionStorage.setItem('name', name);
        window.sessionStorage.setItem('provider', provider);
        this.props.abcd.onLogin();
        this.props.fff.bbb.history.push('/');

    }

    // 여기서 로그인 처리를 해버렸!
    render(){
        console.log(`this.state in /loginConsumer :   ` + JSON.stringify(this.state));
        console.log(`this.props in /loginConsumer:` + JSON.stringify(this.props));
        console.log(`this.props.abcd 은!!!` + JSON.stringify(this.props.abcd));
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


/*
mutation{
  createUser(
    id:"",
    name:"",
    provider:"",
    email:""
  ){
    id,
    name,
    provider,
    email
    
  }
}

*/