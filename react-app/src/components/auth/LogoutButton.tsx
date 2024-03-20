import React from 'react';
// import { useDispatch } from 'react-redux'; // JS ONLY- does not convert to TS
import { useAppDispatch } from '../utility/hooks'; // Must be used in TS in place of useDispatch
import { useHistory } from 'react-router-dom';
import { clearPurchaseAction } from '../../store/purchases';
import { clearPurchaseItemsAction } from '../../store/purchasesItems';
import { logout } from '../../store/session';
import "../Navbar.css"

const LogoutButton = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const onLogout = async (e: any) => {
    localStorage.clear()
    await dispatch(logout());
    await dispatch(clearPurchaseItemsAction())
    await dispatch(clearPurchaseAction())
    history.push("/")
  };

  return <div className='logout-link' onClick={onLogout}>LOGOUT</div>;
};

export default LogoutButton;
