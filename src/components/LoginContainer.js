import React, { Component } from "react";
import Store from "../Store/store";
import Login from "./Login";

const LoginContainer = () => (
    <Store.Consumer>
        {store => (
            <Login onLogin={store} />
        )}
    </Store.Consumer>
);

export default LoginContainer;