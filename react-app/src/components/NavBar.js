import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

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
            <Link to='/orders' className='orders-link'>MY ORDERS</Link>
          </div>
          <div className='logout-user'>
            <LogoutButton />
          </div>
          <div className='shopping-cart'>
            <Link to='/cart' className='shopping-cart-link'>{cartIcon}</Link>
          </div>
        </div>
      </div>
    ) :
    sessionLinks = (
      <div className='session-links-outer'>
        <div className='session-links-no-user'>
          <div className='login-container'>
            <Link to='/login' className='login-link'>LOGIN</Link>
          </div>
          <div className='shopping-cart'>
            <Link to='/cart' className='shopping-cart-link'>{cartIcon}</Link>
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
                {/* <div wrapping title, key into state to make links using category to sort, names, id number */}
                <div className='wingsuit-links-container'>
                  <div className='wingsuits-category title'>Wingsuits</div>
                  {Object.entries(itemsState).map((item, i) => {
                    // {console.log(item)}
                    return (
                      <div key={i}> {if (item[1].category === "Wingsuit") (item[1].item_name)} </div>
                    )
                  })}
                </div>
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
