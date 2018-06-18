import React, { Component } from 'react';
import ApplicationsService from '../services/ApplicationsService.js'
import Application from '../components/Application.js';
import '../css/applications.css'

class Applications extends Component {

  constructor(props){
    super(props);
    this.state = {
      applications: []
    };
  }

  render(){
    return (
      <div className='screen'>

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
      console.log(res.data)
      this.setState({applications: res.data});
    })
    .catch(error => {
      console.log(error);
    });
  }
}

export default Applications;