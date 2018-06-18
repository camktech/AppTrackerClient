import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/nav.css';

class Nav extends Component {
  render(){
    return (
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <NavLink to='/interviews' className='nav-link'>Interviews</NavLink>
        </li>

        <li className='nav-item'>
          <NavLink exact to={'/applications'} className='nav-link'>Applications</NavLink>
        </li>

        <li className='nav-item'>
          <NavLink to='/profile' className='nav-link'>Profile</NavLink>
        </li>
      </ul>

    )
  }
}

export default Nav;