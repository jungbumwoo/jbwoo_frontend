import React, { Component } from 'react';
import { HashRouter as Switch, Router, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Post from "./Routes/Post";

class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="post" component={Post} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
