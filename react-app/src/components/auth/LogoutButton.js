import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearPurchaseAction } from '../../store/purchases';
import { clearPurchaseItemsAction } from '../../store/purchasesItems';
import { logout } from '../../store/session';
import "../Navbar.css"

const LogoutButton = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    localStorage.clear()
    await dispatch(clearPurchaseItemsAction())
    await dispatch(clearPurchaseAction())
    await dispatch(logout());
    history.push("/")
  };

  return <div className='logout-link' onClick={onLogout}>LOGOUT</div>;
};

export default LogoutButton;
