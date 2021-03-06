import React from 'react'

import NavItem from '../atoms/NavItem'

const NavMobile = (props) => {
  return (
    <div>
      <ul id='nav-mobile' className='side-nav'>
        <NavItem to='/dashboard' text='Dashboard' />
        <li><a href='#' onClick={props.onClick} value='login'>Login</a></li>
        <li><a href='#' onClick={props.onClick} value='signup'>Sign Up</a></li>
      </ul>
      <a href='#' data-activates='nav-mobile' className='button-collapse'>
        <i className='material-icons'>menu</i>
      </a>
    </div>
  )
}

export default NavMobile
