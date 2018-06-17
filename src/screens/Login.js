import React, { Component } from 'react';
import SessionsService from '../services/SessionsService.js'

class Login extends Component {
  render(){
    return (
      <button onClick={SessionsService.login}>login</button>
    )
  }
}

export default Login;