import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./Routes/Home";
import Post from "./Routes/Post";

function App() {
  return <Router>
    <Route exact path="/" component={Home}/>
    <Route path="/post/:id" component={Post}/>
  </Router>
}

export default App;
