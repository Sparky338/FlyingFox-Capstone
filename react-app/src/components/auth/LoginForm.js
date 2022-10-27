import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';

import "../login-signup/login-signup.css"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
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
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginForm;
