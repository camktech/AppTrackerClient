import React, { Component } from 'react';
import ApplicationsService from '../services/ApplicationsService.js'
import Application from '../components/Application.js';

class Applications extends Component {

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

  componentDidMount() {
    ApplicationsService.getAll()
    .then(res => {
      this.setState({applications: res.data});
    })
    .catch(error => {
      console.log(error);
    });
  }
}

export default Applications;