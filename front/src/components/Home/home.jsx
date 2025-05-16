/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext } from 'react';
import SearchContext from '../../contexts/SearchContext';
import Home from '../../images/Home.svg';
import './homeStyle.scss';

function HomePage() {
  // Hook created to manage settings search:
  const [state, setState] = useState({ keyword: '', zip_code: '' });
  const { handleSearch } = useContext(SearchContext);

  // Local's parametres
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleClick = (e) => {
    e.preventDefault();
    handleSearch(e, state);
  };

  return (
    <div className="home">
      <header>
        <h1 className="home-title"> Find the activity that is made for you</h1>
      </header>

      <section className="form-home">
        <div>
          <form className="ui large form">
            <div className="equal width fields">
              <div className="field color2">
                <label>Activity name</label>
                <input
                  placeholder="ex. judo"
                  value={state.keyword}
                  onChange={handleChange}
                  name="keyword"
                />
              </div>

              <div className="field color2">
                <label>Zip code</label>
                <input
                  placeholder="ex. 75, 75006"
                  value={state.zip_code}
                  onChange={handleChange}
                  name="zip_code"
                  required
                />

              </div>
            </div>
            <button
              className="ui color1 button field-submit"
              type="submit"
              onClick={handleClick}
            >
              {' '}
              <i className="icon search"> </i>
            </button>
            <div className="ui hidden divider" />
          </form>
        </div>
      </section>

      <section className="image-section">
        <img src={Home} alt="accueil" className="home-image" />
        <a href="https://storyset.com/health" className="attribution">Health illustrations by Storyset</a>
      </section>
    </div>

  );
}

export default React.memo(HomePage);
