import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faUser } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './headerStyles.scss';

function Header({
  isLogged,
  setIsLogged,
  setToken,
}) {
  const navigate = useNavigate();

  // To identify the page we are currently on
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');

  // Give the URL to state whenever URL changes
  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  // Logout Feature
  const handleLogout = () => {
    setToken(null);
    localStorage.clear(); // Remove token from localStorage in browser
    setIsLogged(false);
    navigate('/');
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
          <button type="button" className="appheader-button">Connexion</button>
          <FontAwesomeIcon icon={faUser} size="2x" className="appheader-button-mobile" />
        </Link>
        )}

        {/* If logged, show profile and logout buttons */}
        {/* Profile and activities buttons will toggle depending on the page we are on */}
        <ul className="appheader-navbar">
          <li>
            {' '}
            {isLogged && (currentPath !== '/organism/profile') && (
            <Link to="/organism/profile" className="appheader-profile">
              <button type="button" className="appheader-button">Mon profil</button>
              <FontAwesomeIcon icon={faUser} size="2x" className="appheader-button-mobile" />
            </Link>
            )}
          </li>
          <li>
            {' '}
            {isLogged && (currentPath !== '/organism/activities') && (
            <Link to="/organism/activities" className="appheader-profile">
              <button type="button" className="appheader-button">Mes activités</button>
              <FontAwesomeIcon icon={faUser} size="2x" className="appheader-button-mobile" />
            </Link>
            )}
          </li>
          <li>
            {isLogged && (
            <Link to="/organism/create" className="appheader-profile">
              <button type="button" className="appheader-button">Ajouter une activité</button>
              <FontAwesomeIcon icon={faUser} size="2x" className="appheader-button-mobile" />
            </Link>
            )}
          </li>
          <li>
            {isLogged && (
            <div className="appheader-logout">
              <button type="button" className="appheader-button" onClick={handleLogout}>Déconnexion</button>
              <FontAwesomeIcon icon={faArrowRightFromBracket} size="2x" className="appheader-button-mobile" onClick={handleLogout} />
            </div>
            )}
          </li>
        </ul>
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
