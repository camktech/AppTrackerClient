import React, { Component } from 'react';
import axios from 'axios';
import Application from './Application.js';

class ApplicationsContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      applications: []
    };
  }

  render(){
    return (
      <div>

      {this.state.applications.map((application) => {
        return (
          <Application application={application} key={application.id}/>
        )
      })}

      </div>
    );
  }

  componentDidMount(){
    axios.get('http://localhost:3000/applications')
    .then(res => {
      this.setState({applications: res.data});
    })
    .catch(error => {
      console.log(error);
    })
  }
}

export default ApplicationsContainer;