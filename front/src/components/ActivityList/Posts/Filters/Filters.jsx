/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useContext, useEffect } from 'react';
import useFilterReducer, { getActionValue } from '../../../../Hooks/useFilterReducer';
import FiltersContext from '../../../../contexts/FiltersContext';
import './filterStyles.scss';

function Filters() {
  const { Filter, filterDispatch } = useFilterReducer();
  const { handleFilter } = useContext(FiltersContext);

  const handleCheckBoxChange = (e) => {
    filterDispatch(getActionValue(e.target.name, e.target.checked));
  };

  useEffect(
    () => {
      handleFilter(Filter);
    },
    [Filter],
  );
  const [hiden, ishiden] = useState('false');
  const handleChangeFilter = () => {
    ishiden(!hiden);
  };
  return (
    <div>
      <button
        className="filter-style"
        type="button"
        onClick={handleChangeFilter}
      >
        Filtres
      </button>
      {!hiden && (
      <div className="global-container">
        <div>
          <h1 className="filter-title">Days of practice</h1>
          <div className="filters-container">
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="monday"
                  onChange={handleCheckBoxChange}
                />
                <span>Monday</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="tuesday"
                  onChange={handleCheckBoxChange}
                />
                <span>Tuesday</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="wednesday"
                  onChange={handleCheckBoxChange}
                />
                <span>Wednesday</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="thursday"
                  onChange={handleCheckBoxChange}
                />
                <span>Thursday</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="friday"
                  onChange={handleCheckBoxChange}
                />
                <span>Friday</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="saturday"
                  onChange={handleCheckBoxChange}
                />
                <span>Saturday</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="sunday"
                  onChange={handleCheckBoxChange}
                />
                <span>Sunday</span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <h1 className="filter-title">Level</h1>
          <div className="filters-container">
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="allLevel"
                  onChange={handleCheckBoxChange}
                />
                <span>All levels</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="beginner"
                  onChange={handleCheckBoxChange}
                />
                <span>Beginner</span>
              </label>
            </div>

            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="confirmed"
                  onChange={handleCheckBoxChange}
                />
                <span>Experienced</span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <h1 className="filter-title">Gender</h1>
          <div className="filters-container">
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="mixt"
                  onChange={handleCheckBoxChange}
                />
                <span>Mixed</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="women"
                  onChange={handleCheckBoxChange}
                />
                <span>Female</span>
              </label>
            </div>
            <div className="cat action">
              <label>
                <input
                  id="opt-in"
                  type="checkbox"
                  name="men"
                  onChange={handleCheckBoxChange}
                />
                <span>Male</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default React.memo(Filters);
