import React,  { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth'

const Login = (props) => {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  //update state based on form input changes

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  }

  // submit form
  const handleFormSubmit = async (event) => {
    event.PreventDefault();
    
    try {
      const { data } = await login ({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  
  // clear form values
  setFormState({
    email: '',
    password: '',
  })
  }

  
  return (
    <section className=''>
      <div className=''>
        <div className=''>
          <h4 className=''>Login</h4>
          <div className=''>
            {data ? (
              <p>
                You are Logged in. {' '}
                <Link to='/' >Head back to homepage.</Link>
              </p>
            ) : (
              <form onSubmit={ handleFormSubmit }>
                <input
                  className=''
                  placeholder='Email'
                  name='email'
                  type='email'
                  vaule={formState.email}
                  onChange={handleChange}
                />
                <input
                  className=''
                  placeholder='Password'
                  name='password'
                  type='password'
                  vaule={formState.password}
                  onChange={handleChange}
                />
                <button
                className=''
                style={{ cursor: 'pointer' }}
                type='submit'
                >
                  Submit
                </button>
              </form>
            )}
            {error && (
              <div className=''>
                {error.message}
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login