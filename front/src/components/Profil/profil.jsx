/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import swal from 'sweetalert';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import Sport from '../../images/Sport3.svg';
import './profil.scss';

function Profil({
  token,
  setIsLogged,
  setToken,
}) {
  const [organism, setOrganism] = useState({});
  const navigate = useNavigate();

  // Request to API to get profile data of an organism depending on token
  const fetchOrganism = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/organism/profile`, {
        headers: {
          authorization: token,
        },
      });
      // Give data to state
      setOrganism(response.data.user);
    }
    catch (error) {
      console.log(error);
    }
  };

  // useEffect so that data is fetched on mount
  useEffect(
    () => {
      fetchOrganism();
    },
    [],
  );

  // Delete profile feature
  const deleteProfile = async () => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/organism/profile/delete`,
        {
          headers: { authorization: token },
        },
      );
      setToken(null);
      setIsLogged(false); // Logout
      localStorage.clear(); // Remove token from localStorage in browser
      navigate('/');
    }
    catch (error) {
      console.log(error);
    }
  };

  // Alert modal to confirm delete profile
  const handleClick = () => {
    swal({
      title: 'Do you really want to delete this profile?',
      buttons: ['Cancel', 'Delete profile'],
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          deleteProfile();
          swal('Your profile has been deleted', {
            icon: 'success',
          });
        }
      });
  };

  return (
    <div className="organism-page-container">
      <div className="organism-section">
        <img src={Sport} alt="Sport" className="image image-profile" />
      </div>
      <div className="organism-section">
        <div className="organism-infos-header">
          <h1 className="organism-infos-header-title">My profile</h1>
          <p className="cancel-modif">
            <Link to="/organism/profile/edit" className="link">
              <Button
                className="ui color1 button"
              >
                <Button.Content visible>
                  <Icon name="pencil" />
                </Button.Content>
              </Button>
            </Link>
          </p>
        </div>
        <div className="organism-infos-body">
          <div className="organism-field">
            <h2>Name</h2>
            <p>{organism.name}</p>
          </div>
          <div className="organism-field">
            <h2>Login email</h2>
            <p>{organism.email}</p>
          </div>
          <div className="organism-field">
            <h2>Phone number</h2>
            <p>{organism.phone_number}</p>
          </div>
          <div className="organism-field">
            <h2>Contact email</h2>
            <p>{organism.contact_email}</p>
          </div>
          <div className="organism-field">
            <h2>Description </h2>
            <p>{organism.description}</p>
          </div>
          <div className="organism-delete">
            <Button basic color="red" type="button" size="mini" onClick={handleClick}>Delete profile</Button>
          </div>
          <div>
            <a href="https://storyset.com/sport" className="attribution">Sport illustrations by Storyset</a>
          </div>
        </div>
      </div>
    </div>
  );
}

Profil.propTypes = {
  token: PropTypes.string.isRequired,
  setIsLogged: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
};

export default React.memo(Profil);
