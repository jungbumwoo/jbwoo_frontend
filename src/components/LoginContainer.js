import React, { Component } from "react";
import Store from "../Store/store";
import LoginConsumer from "./LoginConsumer";

const LoginContainer = (props) => (
    <Store.Consumer>
        {value => (
            <LoginConsumer abcd={value} fff={props} />
        )}
    </Store.Consumer>
);

export default LoginContainer;

