import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

import "./Navbar.css"

const NavBar = () => {
  return (
    <div className='outer-most'>
      <div className='outer-nav'>
        <nav className='nav-bar'>
          <div className='Nav-logo'>
            <NavLink
              className='home_logo'
              to='/'
              exact={true}
              activeClassName='active'>
              {/* <img
                className='Flying-Fox-logo'
                src={logo} //named import
                alt='Flying Fox logo'
                width={"80px"}
                height={'80px'}
              /> */}
              Home
            </NavLink>
          </div>

          <div className='nav-bar-links'>
            <div className='dropdown'>
              <div className='suits-parachutes-dropdown'>Suits & Parachutes</div>
              <div className='suits-parachutes-content'>
                <div className='wingsuits-category title'>Wingsuits</div>
                <div className='tracking-suits-category title'>Tracking Suits</div>
                <div className='parachutes-category title'>Parachutes</div>
                <div className='meet-the-dev title'>Flying Fox Dev</div>
              </div>
              <div className='dev'>Developer</div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;

      // <ul>
      //   <li>
      //     <NavLink to='/' exact={true} activeClassName='active'>
      //       Home
      //     </NavLink>
      //   </li>
      //   {/* <li>
      //     <NavLink to='/sign-up' exact={true} activeClassName='active'>
      //     Sign Up
      //     </NavLink>
      //   </li> */}
      //   {/* <li>
      //     <NavLink to='/users' exact={true} activeClassName='active'>
      //     Users
      //     </NavLink>
      //   </li> */}
      //   <li>
      //     <NavLink to='/login' exact={true} activeClassName='active'>
      //       Login
      //     </NavLink>
      //   </li>
      //   <li>
      //     <LogoutButton />
      //   </li>
      // </ul>
