import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux'; // JS ONLY- does not convert to TS
import { useAppSelector, useAppDispatch } from '../utility/hooks'; // Must be used in TS in place of useSelector and useDispatch
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

import "../login-signup/login-signup.css"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useAppSelector(state => state.session.user);
  const dispatch = useAppDispatch();

  const onLogin = async (e: any) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const handleDemo = () => {
    setEmail('demo@aa.io');
    setPassword('password');
  }

  const updateEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e: any) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind} className="mapped-errors">{error}</div>
        ))}
      </div>
      <div className='email-container'>
        <label htmlFor='email' className='email-label'>Email</label>
        <input
          className='email-input-field'
          name='email'
          type='text'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='password-container'>
        <label htmlFor='password' className='password-label'>Password</label>
        <input
          className='password-input-field'
          name='password'
          type='password'
          value={password}
          onChange={updatePassword}
        />
      </div>
      <button type='submit' className='login-signup-button'>LOGIN</button>
      <div className='space'></div>
      <button onClick={handleDemo} className='login-signup-button'>DEMO USER</button>
    </form>
  );
};

export default LoginForm;
