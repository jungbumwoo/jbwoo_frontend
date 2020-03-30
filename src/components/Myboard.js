import React, { Componet, Component } from "react";
import styled from "styled-components";
import withLogin from "./LoginHOC";

class Myboard extends Component {
    render() {
        return (
            <div>
                내 글 보기
            </div>
        );
    }
};

export default withLogin(Myboard);