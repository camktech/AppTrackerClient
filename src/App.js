import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Router, Route } from 'react-router-dom';
import { Router, Route, Redirect } from 'react-router';
import history from './history.js';

import Applications from './screens/Applications.js';
import Interviews from './screens/Interviews.js';
import Profile from './screens/Profile.js';
import Login from './screens/Login.js';
import Register from './screens/Register.js';
import Nav from './components/Nav.js';

class App extends Component {

  userAuthorized(){
    return true;
  }

  path(path){
    return this.userAuthorized() ? '/applications' : '/login';
  }

  redirectIfUnauthorized(){
    if(!this.userAuthorized()){
      return (<Redirect to={this.path('/applications')}/>);
    }
  }

  render() {
    if(this.userAuthorized()){

      return (
        <Router history={history}>
          <div className="App">
            <Nav/>
            <Redirect to='/applications'/>
            <Route path='/applications' component={Applications}/>
            <Route path='/interviews' component={Interviews}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/>
          </div>
        </Router>
      );

    } else {

      return (
        <Router history={history}>
          <div className="App">
            <Redirect to='/login'/>
            <Route path='/login' component={Login}/>
          </div>
        </Router>
      );

    }
  }
}

export default App;
