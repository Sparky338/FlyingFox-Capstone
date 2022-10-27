import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import "../Navbar.css"

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <div className='logout-link' onClick={onLogout}>LOGOUT</div>;
};

export default LogoutButton;
