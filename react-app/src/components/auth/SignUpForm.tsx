import React, { useState, useEffect } from 'react';
// Must be used in TS in place of useSelector/ useDispatch
import { useAppSelector, useAppDispatch } from '../utility/hooks';
// JS ONLY- does not convert to TS
// import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

import validator from 'validator';

const SignUpForm = () => {
  const user = useAppSelector(state => state.session.user);
  const dispatch = useAppDispatch();

  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [repeatEmail, setRepeatEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validationError: any = [];
  // type should be string[], however errors is typed never[],
  // causing issues with setErrors below

  useEffect(() => {
    if (!firstName) {
      validationError.push("First name is required")
    }

    if (!lastName) {
      validationError.push("Last name is required")
    }

    if (!(validator.isEmail(email))) {
      validationError.push("Please provide a valid email");
    }

    if (email !== repeatEmail)
      validationError.push("Confirm email must match email");

    if (password.length < 4) {
      validationError.push("Password needs to have at least 4 characters");
    }

    if (password !== repeatPassword) {
      validationError.push("Confirm password must match password");
    }

    setErrors(validationError);
    // eslint-disable-next-line
  }, [firstName, lastName, email, repeatEmail, password, repeatPassword])

  const onSignUp = async (e: any) => {
    e.preventDefault();
    setIsSubmitted(true);
    if (errors.length) return;

    if (password === repeatPassword && email === repeatEmail) {
      const data = await dispatch(signUp(firstName, lastName, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateFirstName = (e: any) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e: any) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const updateRepeatEmail = (e: any) => {
    setRepeatEmail(e.target.value);
  };

  const updatePassword = (e: any) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e: any) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      {isSubmitted && (
        <div className='errors-container'>
          {
            errors.map((error, ind) => (
              <div key={ind} className="mapped-errors">{error}</div>
            ))
          }
        </div>
      )}
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
