import React, { useContext } from 'react';
import Filters from './Posts/Filters/Filters';
import PostsList from './Posts/Posts/PostsList';
import FiltersContext from '../../contexts/FiltersContext';
import SearchContext from '../../contexts/SearchContext';
import './activityListStyles.css';

function ActivityList() {
  const { filtersSelect } = useContext(FiltersContext);
  const { results } = useContext(SearchContext);

  // function to manage array for props:
  const arr = results;
  const day1 = filtersSelect.monday;
  const day2 = filtersSelect.tuesday;
  const day3 = filtersSelect.wednesday;
  const day4 = filtersSelect.thursday;
  const day5 = filtersSelect.friday;
  const day6 = filtersSelect.saturday;
  const day7 = filtersSelect.sunday;
  const gender1 = filtersSelect.mixed;
  const gender2 = filtersSelect.female;
  const gender3 = filtersSelect.male;
  const level1 = filtersSelect.allLevels;
  const level2 = filtersSelect.beginner;
  const level3 = filtersSelect.advanced;

  function data(table) {
    const isdayfiltrenotactive = (
      day1 === ''
    && day2 === ''
    && day3 === ''
    && day4 === ''
    && day5 === ''
    && day6 === ''
    && day7 === ''
    );

    const gendrefiltrenotactive = (
      gender1 === ''
    && gender2 === ''
    && gender3 === ''
    );
    const levelfiltrenotactive = (
      level1 === ''
    && level2 === ''
    && level3 === ''
    );
    const rightData = table.filter((el) => {
      const isvalid = (isdayfiltrenotactive || (
        el.day === day1
    || el.day === day2
    || el.day === day3
    || el.day === day4
    || el.day === day5
    || el.day === day6
    || el.day === day7
      ))
&& (gendrefiltrenotactive || (
  el.gender === gender1
    || el.gender === gender2
    || el.gender === gender3
))
&& (levelfiltrenotactive || (
  el.level === level1
    || el.level === level2
    || el.level === level3
));
      return isvalid;
    });
    return rightData;
  }

  const result = data(arr);

  return (
    <div>
      <div className="container-activity">
        <Filters />
        <PostsList
          results={result}
        />
      </div>
    </div>
  );
}

export default React.memo(ActivityList);
