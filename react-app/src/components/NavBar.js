import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

import "./Navbar.css"

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)

  const cartIcon = <i class="fa-solid fa-cart-shopping"></i>

  let sessionLinks;
  sessionUser ?
    sessionLinks = (
      <div className='session-links-user'>
        <div className='orders-link'>
          <Link to='/orders'>MY ORDERS</Link>
        </div>
        <div className='logout-user'>
          {/* <Link to='/logout'>LOGOUT</Link> */}
          <LogoutButton />
        </div>
        <div className='shopping-cart-user'>
          <Link to='/cart' className='cart-link'>
            {cartIcon}
          </Link>
        </div>
      </div>
    ) :
    sessionLinks = (
      <div className='session-links-no-user'>
        <div className='login'>
          <Link to='/login'>LOGIN</Link>
        </div>
        <div className='shopping-cart-user'>
          <Link to='/cart'>{cartIcon}</Link>
        </div>
      </div>
    )


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
            <div className='dropdown-suits-parachutes'>
              <div className='suits-parachutes-dropdown'>Suits & Parachutes</div>
              <div className='suits-parachutes-content'>
                <div className='wingsuits-category title'>Wingsuits</div>
                <div className='tracking-suits-category title'>Tracking Suits</div>
                <div className='parachutes-category title'>Parachutes</div>
                <div className='meet-the-dev title'>Flying Fox Dev</div>
              </div>
            </div>
            <Link className='dev' to='/developer'>Developer</Link>
          </div>
          {sessionLinks}
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
