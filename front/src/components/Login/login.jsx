/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import Sport from '../../images/Sport.svg';
import './login.scss';

function Login({
  setToken,
  setIsLogged,
  isLogged,
}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [errMsg, setErrMsg] = useState('');

  const navigate = useNavigate();

  // To avoid bug on refresh, navigate to profile if logged in
  useEffect(
    () => {
      if (isLogged) {
        navigate('/organism/profile');
      }
    },
    [],
  );

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Axios request to send email and password to API
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/organism/login`,
        {
          email,
          password,
        },
      );

      // Retrieve token from response
      const { token } = response.data;

      // Error if undefined is returned meaning that we don't have credentials in database
      if (token === undefined) {
        setErrMsg('Your credentials do not exist.');
        localStorage.clear();
        navigate('/login');
        return;
      }

      // If OK, set token in props, activate IsLogged and redirect to profile
      setToken(token);
      setIsLogged(true);
      navigate('/organism/profile');
    }
    catch (err) {
      if (!err?.response) {
        setErrMsg('The server cannot be reached.');
        console.log(errMsg);
      }
      else {
        setErrMsg('Your credentials do not match. Please try again.');
        console.log(errMsg);
      }
    }
  };

  return (
    <div className="container container-login">
      <div className="container-image">
        <img src={Sport} alt="Sport" className="image" />
      </div>

      <div className="container-form container-form-login">
        <div>
          <h2 className="form-title">Login as an organization</h2>
        </div>
        <div>
          <h2 className="form-error">{errMsg}</h2>
        </div>
        <form className="ui form container-form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Your email address</label>
            <input type="email" id="email" placeholder="Email address" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="field">
            <label htmlFor="password">Your password</label>
            <input type="password" id="password" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
          </div>

          <div className="field">
            <button className="ui color1 button" type="submit">Login</button>
          </div>

        </form>
        <div>
          <Link to="/register" className="link">Don&apos;t have an account yet?</Link>
        </div>
        <div>
          <a href="https://storyset.com/together" className="attribution">Together illustrations by Storyset</a>
        </div>
      </div>
    </div>

  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
  setIsLogged: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

export default React.memo(Login);
