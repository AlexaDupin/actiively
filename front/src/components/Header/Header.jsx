import React, { useState } from 'react';
import {
  Link, useNavigate, NavLink,
} from 'react-router-dom';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUser } from '@fortawesome/free-regular-svg-icons';
import Burger from '../Burger/Burger';

import './headerStyles.scss';

function Header({
  isLogged,
  setIsLogged,
  setToken,
}) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const navigate = useNavigate();

  // Logout Feature
  const handleLogout = () => {
    setToken(null);
    localStorage.clear(); // Remove token from localStorage in browser
    setIsLogged(false);
    navigate('/');
  };

  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <header className="appheader">
      <Link to="/">
        <FontAwesomeIcon className="appheader-icon" icon={faLightbulb} size="3x" />
      </Link>
      <h1 className="appheader-title">Actiively</h1>
      <nav>
        {/* If not logged, show login button */}
        {!isLogged && (

        <Link to="/login">
          <button type="button" className="appheader-button login-button">Connexion</button>
          <FontAwesomeIcon icon={faUser} size="2x" className="appheader-button-mobile" />
        </Link>
        )}

        {/* If logged, show profile and logout buttons */}
        {/* Profile and activities buttons will toggle depending on the page we are on */}
        <ul className={`appheader-navbar ${isBurgerOpen ? 'appheader-navbar-open' : 'appheader-navbar-closed'}`}>
          <li>
            {' '}
            {isLogged && (
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="appheader-button"
              to="/organism/profile"
              onClick={toggleBurger}
            >
              Mon profil
            </NavLink>
            )}
          </li>
          <li>
            {' '}
            {isLogged && (
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="appheader-button"
              to="/organism/activities"
              onClick={toggleBurger}
            >
              Mes activités
            </NavLink>
            )}
          </li>
          <li>
            {isLogged && (
            <NavLink
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="appheader-button"
              to="/organism/create"
              onClick={toggleBurger}
            >
              Ajouter une activité
            </NavLink>
            )}
          </li>
          <li>
            {isLogged && (
            <NavLink
              className="appheader-button"
              onClick={handleLogout}
            >
              Déconnexion
            </NavLink>
            )}
          </li>
        </ul>
        <button
          type="button"
          className={`appheader-burger ${!isLogged ? 'appheader-burger-loggedout' : ''} ${isBurgerOpen ? 'appheader-burger-active' : ''}`}
          onClick={toggleBurger}
        >
          <Burger />
        </button>
      </nav>
    </header>
  );
}

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  setIsLogged: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
};

export default React.memo(Header);
