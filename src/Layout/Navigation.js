import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.div`
    width: 100%;
    height: 30px;
    border-botton: 1px solid #d1d8e4l
`
const NavList = styled.ul`
    width: 1080px;
    display: flex;
    margin: 0 auto;
`

const NavItem = styled.li`
    width: 5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
    margin-top: 5px;
    display: flex;
`

class Navigation extends Component {
    render() {
        return(
            <Nav>
                <NavList>
                    <NavItem><Link to="/">Home</Link></NavItem>
                    <NavItem><Link to="/post">게시판</Link></NavItem>
                    <NavItem><Link to="/blabla">잡담</Link></NavItem>
                    <NavItem><Link to="/coding">개발도전기</Link></NavItem>
                    <NavItem><Link to="/contact">Contact</Link></NavItem>
                </NavList>
            </Nav>
        )
    }
}

export default Navigation;