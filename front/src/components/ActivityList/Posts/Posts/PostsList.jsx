import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './postsListStyles.css';

function Posts({ results }) {
  // Message depends on number of results
  const getMessage = () => {
    if (results.length === 0) {
      return 'No result for your search';
    }
    if (results.length === 1) {
      return '1 result for your search';
    }

    return `${results.length} results for your search`;
  };

  return (
    <div>
      <h2 className="number-result">
        {getMessage()}
      </h2>
      <main className="posts">
        <div className="posts-container">
          {results.map((post) => (
            <Post
              name={post.activity_name}
              city={post.city}
              level={post.level}
              gender={post.gender}
              day={post.day}
              image_url={post.image_url}
              organismName={post.organism_name}
              price={post.price}
              price_type={post.price_type}
              zip_code={post.zip_code}
              key={post.code_activity}
              code_activity={post.code_activity}
            />
          ))}

        </div>
      </main>
    </div>
  );
}

Posts.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    activity_name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    day: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    organism_name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    price_type: PropTypes.string.isRequired,
    zip_code: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

Posts.defaultProps = {};

export default React.memo(Posts);
