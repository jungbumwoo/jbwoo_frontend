import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "../Routes/Home";
import postDetail from '../Routes/postDetail';
import Login from "../components/Login";
import Navigation from "../Layout/Navigation";
import Header from "../Layout/Header";
import styled from "styled-components";
import Store from "../Store/store";

const Layout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow: row wrap;
`

class App extends Component {

  constructor(props) {
    super(props)
    this.state= {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout
    }
  }
  
  //Login function
  onLogin = () => {
    this.setState({
      logged: true
    });
  }

  //Logout function
  onLogout = () => {
    this.setState({
      logged: false
    });
  }

  render() {
    console.log(`this.state1 : ` + JSON.stringify(this.state));

    const { logged, onLogin, onLogout } = this.state;

    console.log(`this.state2 : ` + JSON.stringify(this.state));
    console.log(`this.state.onLogin : ` + JSON.stringify(this.state.onLogin));
    console.log(`logged is :` + logged);
    console.log(`onLogin is : ` + onLogin);
    return (
        <Store.Provider value={this.state, this.state.onLogin}>
          <Layout>
          <Router>
          <Header logged={logged} onLogout={onLogout} />
          <Navigation />
            <Route exact path="/" component={Home}/>
            <Route path="/login" component={Login} />
            <Route path="/post/:id" component={postDetail}/>
        
          </Router>
          </Layout>
        </Store.Provider>
        
    )
  }

}
export default App;





/*
function App() {
  return <Router>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={Login} />
    <Route path="/post/:id" component={postDetail}/>
  </Router>
}

 */

