
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

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
