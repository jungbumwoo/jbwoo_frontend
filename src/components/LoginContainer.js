import React, { Component } from "react";
import Store from "../Store/store";
import Login from "./Login";

const LoginContainer = () => (
    <Store.Consumer>
        {value => (
            <Login abcd={value} />
        )}
    </Store.Consumer>
);

export default LoginContainer;

