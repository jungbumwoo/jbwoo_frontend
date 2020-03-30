import React, { Component } from "react";
import styled from "styled-components";
import withLogin from "./LoginHOC";

class Mypage extends Component {
    render() {
        return(
            <div>
                MyPage다.
            </div>
        );
    }
}

export default withLogin(Mypage);