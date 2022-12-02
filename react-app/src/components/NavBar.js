import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import flyingFoxLogo from '../images/Flying_Fox_Logo.png'

import "./Navbar.css"

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user);
  const itemsState = useSelector(state => state.items);

  const cartIcon = <i class="fa-solid fa-cart-shopping"></i>

  let sessionLinks;
  sessionUser ?
    sessionLinks = (
      <div className='session-links-outer'>
        <div className='session-links-user'>
          <div className='orders-link-container'>
            <Link to='/orders' className='orders-link' >MY ORDERS</Link>
          </div>
          <div className='logout-user'>
            <LogoutButton />
          </div>
          <div className='shopping-cart'>
            <Link to='/cart' className='shopping-cart-link' >{cartIcon}</Link>
          </div>
        </div>
      </div>
    ) :
    sessionLinks = (
      <div className='session-links-outer'>
        <div className='session-links-no-user'>
          <div className='login-container'>
            <Link to='/login' className='login-link' >LOGIN</Link>
          </div>
          <div className='shopping-cart'>
            <Link to='/cart' className='shopping-cart-link' >{cartIcon}</Link>
          </div>
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
              <img
                className='Flying-Fox-logo'
                src={flyingFoxLogo}
                alt='Flying Fox logo'
              />
            </NavLink>
          </div>

          <div className='nav-bar-links'>
            <div className='dropdown-suits-parachutes'>
              <div className='suits-parachutes-dropdown-text'>Suits & Parachutes</div>
              <div className='suits-parachutes-content'>
                <div className='dropdown-links-container'>
                  <div className='wingsuit-links-container'>
                    <div className='wingsuits-category title Navbar-title'>Wingsuits</div>
                    {Object.entries(itemsState).filter(item => item[1].category === "Wingsuit").map((item, i) => {
                      return (
                        <Link to={`/items/${item[1].id}`} key={i} className="wingsuit-links navbar-item-links" >
                          {(item[1].item_name)}
                        </Link>
                      )
                    })}
                  </div>
                  <div className='track-suit-parachute-container'>
                    <div className='tracking-suits-links-container'>
                      <div className='tracking-suits-category title Navbar-title'>Tracking Suits</div>
                      {Object.entries(itemsState).filter(item => item[1].category === "Tracking suit").map((item, i) => {
                        return (
                          <Link to={`/items/${item[1].id}`} key={i} className="tracking-suits-links navbar-item-links" >
                            {(item[1].item_name)}
                          </Link>
                        )
                      })}
                    </div>
                    <div className='parachutes-links-container'>
                      <div className='parachutes-category title Navbar-title'>Parachutes</div>
                      {Object.entries(itemsState).filter(item => item[1].category === "Parachute").map((item, i) => {
                        return (
                          <Link to={`/items/${item[1].id}`} key={i} className="parachute-links navbar-item-links" >
                            {(item[1].item_name)}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                  <Link to='/developer' className='meet-the-dev title Navbar-title' >Flying Fox Dev</Link>
                </div>
              </div>
            </div>
            <Link className='dev' to='/developer' >Developer</Link>
          </div>
          {sessionLinks}
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
