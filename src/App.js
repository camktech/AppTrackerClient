import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ApplicationsContainer from './components/ApplicationsContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApplicationsContainer/>
      </div>
    );
  }
}

export default App;
