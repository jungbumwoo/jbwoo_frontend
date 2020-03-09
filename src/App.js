import React, { Component } from 'react';
import { Route, Router } from "react-router-dom";
import Home from "./Routes/Home";
import Post from "./Routes/Post";

class App extends Component {
  
  render(){
    return (
      <div>
        <Route exact path="/" component={Home}/>
        <Route path="/post/:id" component={Post}/>
      </div>      

    );
  }
}

export default App;
