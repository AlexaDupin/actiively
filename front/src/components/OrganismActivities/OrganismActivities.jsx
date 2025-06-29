/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Post from '../ActivityList/Posts/Post/Post';

import './organismActivitiesStyles.scss';

function OrganismActivities({
  token,
}) {
  const [activities, setActivities] = useState([]);

  // Request to API to get activities of an organism
  const fetchActivities = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/organism/activities`, {
        headers: {
          authorization: token,
        },
      });
      setActivities(response.data);
    }
    catch (error) {
      console.log(error);
    }
  };

  // Message depends on number of results
  const getMessage = () => {
    if (activities.length === 0) {
      return 'You don\'t have any activities';
    }
    if (activities.length === 1) {
      return '1 activity offered';
    }

    return `${activities.length} activities offered`;
  };

  // useEffect so that data is fetched on mount
  useEffect(
    () => {
      fetchActivities();
    },
    [activities],
  );

  return (
    <div>
      <main className="posts">
        <div className="message-container">
          <p className="activity-message">{getMessage()}</p>
        </div>
        <div className="results-container">
          {activities.map((activity) => (
            <Post
              key={activity.code_activity}
              code_activity={activity.code_activity}
              name={activity.name}
              zip_code={activity.zip_code}
              city={activity.city}
              level={activity.level}
              gender={activity.gender}
              image_url={activity.image_url}
              day={activity.day}
              price={activity.price}
              price_type={activity.price_type}
              className="activity-card"
            />
          ))}
        </div>
      </main>
    </div>
  );
}

OrganismActivities.propTypes = {
  token: PropTypes.string.isRequired,
};

export default React.memo(OrganismActivities);
