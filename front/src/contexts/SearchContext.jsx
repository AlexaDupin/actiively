import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import axios from 'axios';

const SearchContext = React.createContext({
  handleSearch: () => {},
  search: [],
  results: [],
});
export default SearchContext;

export function SearchContextProvider({ children }) {
  const [search, setSearch] = useState([]);
  const [results, setResults] = useState([]);

  // To enable redirection
  const navigate = useNavigate();

  // Search request
  const postData = async () => {
    if (!search.zip_code && !search.keyword) {
      return;
    }
    try {
      await axios.post('https://actiively-back-zjty.onrender.com/api/v1/activity/search', {
        keyword: search.keyword.toLowerCase(),
        zip_code: search.zip_code,
      })

        .then((res) => {
          setResults(res.data);
        });
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(
    () => {
      postData();
    },
    [search],
  );

  const handleSearch = (e, state) => {
    e.preventDefault();
    const act = `%${state.keyword}%`;
    const key = `${state.zip_code}%`;
    if (key === '%') {
      swal('Oops! Veuillez saisir un code postal (entre 2 et 5 chiffres)');
      return;
    }
    setSearch({
      keyword: act,
      zip_code: key,
    });

    // Redirection to results page on click on Submit
    navigate('/activity');
  };

  const memoizedValue = useMemo(() => ({
    search,
    results,
    handleSearch,
  }), [results]);
  return (
    <SearchContext.Provider value={memoizedValue}>
      {children}
    </SearchContext.Provider>
  );
}

SearchContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
