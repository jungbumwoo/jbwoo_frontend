import React, { Component } from "react";
import Store from "../Store/store";
import LoginConsumer from "./LoginConsumer";

const LoginContainer = () => (
    <Store.Consumer>
        {value => (
            <LoginConsumer abcd={value} />
        )}
    </Store.Consumer>
);

export default LoginContainer;

