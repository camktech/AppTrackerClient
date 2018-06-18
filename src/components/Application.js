import React from 'react';
import Moment from 'react-moment';
import { Component } from 'react';
import ReactTooltip from 'react-tooltip';

class Application extends Component {
  skillsTooltipId(){
    return `${this.props.application.id}-tool-tip`;
  }
  render(){  
    return (
        <div className='container-fluid'>
          <div className='application active'>
  
            <div className='row'>
              <div className='col-md-6 x'>X</div>
              <div className='col-md-2 ml-auto date center-align'>
                <Moment format='DD/MM/YY'>
                  {this.props.application.date}
                </Moment>
              </div>
            </div>
  
            <div className='row'>
              <div className='col-md-10 position'>
                <p>{this.props.application.position} - {this.props.application.company_name}</p>
              </div>
              <div className='col-md-2 skills center-align'>
                <span data-tip data-for={this.skillsTooltipId()} effect='solid'>SKILLS</span>
                <ReactTooltip id={this.skillsTooltipId()} className='skills-tooltip'>
                  <div className='skills-list'>
                    {this.props.application.skills.map((skill) => {
                      return (
                        <div className='skill-item' key={skill.id}>{skill.name}: {skill.experience}</div>
                      )
                    })}
                  </div>
                </ReactTooltip>
              </div>
            </div>
  
            <div className='row'>
              <div className='col-md-8 resume'>
                <span>Resume: {this.props.application.resume.file_name}</span>
              </div>
              <div className='col-md-2 ml-auto match-percent center-align'>{this.props.application.match_percent}% match</div>
            </div>
  
          </div>
        </div>
      );
  }
}

export default Application;