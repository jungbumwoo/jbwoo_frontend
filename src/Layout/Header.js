import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    border-bottom: 1px solid #d1d8e4;
`

const Element = styled.div`
    margin: 0 auto;
    width: 1080px;
    height: 100px;
    display: flex;
    flex-flow: row wrap;
`
const Logo = styled.div`
    order: 2;
    width: 200px;
    height: 80px;
`

const Shortcut = styled.div`
    order: 1;
    width: 100%;
    height: 20px;
    text-align: right;
    background-color: #a8ff78;
`
const Search = styled.div`
    order: 3;
    width: 880px;
    background-color: #78ffd6;
    text-align: center;       
`

class Header extends Component {
    render() {

        const { logged, onLogout } = this.props;

        return (
            <Container>
                <Element>
                    { logged ? 
                    <Shortcut><Link to="/" onClick={onLogout}>로그아웃</Link></Shortcut> :
                    <Shortcut><Link to="/login">로그인/회원가입</Link></Shortcut>}
                    <Logo>
                        <img 
                            src="https://lh3.googleusercontent.com/proxy/AQ0oRmTJgvEwn_INlnin-i67YO4P6F3AfrDnvrdcJihrJcBAFEYedW9ROHlE44MNdM8i23Ci0aB_EMeAX5_OmrmEuvUZYrEm020TGuziAdKuV_k8Ts3v3X0C" 
                            width="100%"
                            height="100%"
                            alt="logo"/>
                    </Logo>
                    <Search><h1>React Blog</h1></Search>
                </Element>
            </Container>
        )
    }
}

export default Header;