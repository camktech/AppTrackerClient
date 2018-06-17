import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render(){
    return (
      <div className='nav-componenet'>
        <div className='nav-tab'>
          <Link to={'/interviews'}>Interviews</Link>
        </div>

        <div className='nav-tab'>
          <Link to={'/applications'}>Applications</Link>
        </div>

        <div className='nav-tab'>
          <Link to={'/profile'}>Profile</Link>
        </div>
      </div>
    )
  }
}

export default Nav;