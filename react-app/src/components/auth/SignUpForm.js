import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword && email === repeatEmail) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateRepeatEmail = (e) => {
    setRepeatEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div className='first-last-name-container'>
        <div className='first-name-container'>
          <label className='first-name-label'>First Name</label>
          <input
            className='first-name-input-field'
            type='text'
            name='firstName'
            onChange={updateFirstName}
            value={firstName}
          ></input>
        </div>
        <div className='last-name-container'>
          <label className='last-name-label'>Last Name</label>
          <input
            className='last-name-input-field'
            type='text'
            name='lastName'
            onChange={updateLastName}
            value={lastName}
          ></input>
        </div>
      </div>
      <div className='email-container'>
        <label className='email-label'>Email</label>
        <input
          className='email-input-field'
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className='email-container'>
        <label className='email-label'>Confirm Email</label>
        <input
          className='email-input-field'
          type='text'
          name='repeat_email'
          onChange={updateRepeatEmail}
          value={repeatEmail}
          required={true}
        ></input>
      </div>
      <div className='password-container'>
        <label className='password-label'>Password</label>
        <input
          className='password-input-field'
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className='password-container'>
        <label className='password-label'>Confirm Password</label>
        <input
          className='password-input-field'
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type='submit' className='login-signup-button'>CREATE ACCOUNT</button>
    </form>
  );
};

export default SignUpForm;
