import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "../Routes/Home";
import postDetail from '../Routes/postDetail';

function App() {
  return <Router>
    <Route exact path="/" component={Home}/>
    <Route path="/:id" component={postDetail}/>
  </Router>
}

export default App;
