import { useReducer } from 'react';

const FilterInitial = {
  monday: '',
  tuesday: '',
  wednesday: '',
  thursday: '',
  friday: '',
  saturday: '',
  sunday: '',
  allLevels: '',
  beginner: '',
  advanced: '',
  mixed: '',
  female: '',
  male: '',
};

function filterReducer(oldState, action) {
  switch (action.type) {
    case 'SET_VALUE': {
      if (action.payload.name === 'monday') {
        let monday = (action.payload.value);
        if (monday) {
          monday = 'Monday';
        }
        else {
          monday = '';
        }
        return {
          ...oldState,
          monday,
        };
      }
      if (action.payload.name === 'tuesday') {
        let tuesday = (action.payload.value);
        if (tuesday) {
          tuesday = 'Tuesday';
        }
        else {
          tuesday = '';
        }
        return {
          ...oldState,
          tuesday,
        };
      }
      if (action.payload.name === 'wednesday') {
        let wednesday = (action.payload.value);
        if (wednesday) {
          wednesday = 'Wednesday';
        }
        else {
          wednesday = '';
        }
        return {
          ...oldState,
          wednesday,
        };
      }
      if (action.payload.name === 'thursday') {
        let thursday = (action.payload.value);
        if (thursday) {
          thursday = 'Thursday';
        }
        else {
          thursday = '';
        }
        return {
          ...oldState,
          thursday,
        };
      }
      if (action.payload.name === 'friday') {
        let friday = (action.payload.value);
        if (friday) {
          friday = 'Friday';
        }
        else {
          friday = '';
        }
        return {
          ...oldState,
          friday,
        };
      }
      if (action.payload.name === 'saturday') {
        let saturday = (action.payload.value);
        if (saturday) {
          saturday = 'Saturday';
        }
        else {
          saturday = '';
        }
        return {
          ...oldState,
          saturday,
        };
      }

      if (action.payload.name === 'sunday') {
        let sunday = (action.payload.value);
        if (sunday) {
          sunday = 'Sunday';
        }
        else {
          sunday = '';
        }
        return {
          ...oldState,
          sunday,
        };
      }
      if (action.payload.name === 'allLevels') {
        let allLevels = (action.payload.value);
        if (allLevels) {
          allLevels = 'All levels';
        }
        else {
          allLevels = '';
        }
        return {
          ...oldState,
          allLevels,
        };
      }
      if (action.payload.name === 'beginner') {
        let beginner = (action.payload.value);
        if (beginner) {
          beginner = 'Beginner';
        }
        else {
          beginner = '';
        }
        return {
          ...oldState,
          beginner,
        };
      }
      if (action.payload.name === 'advanced') {
        let advanced = (action.payload.value);
        if (advanced) {
          advanced = 'Advanced';
        }
        else {
          advanced = '';
        }
        return {
          ...oldState,
          advanced,
        };
      }
      if (action.payload.name === 'mixed') {
        let mixed = (action.payload.value);
        if (mixed) {
          mixed = 'Mixed';
        }
        else {
          mixed = '';
        }
        return {
          ...oldState,
          mixed,
        };
      }
      if (action.payload.name === 'female') {
        let female = (action.payload.value);
        if (female) {
          female = 'Female';
        }
        else {
          female = '';
        }
        return {
          ...oldState,
          female,
        };
      }
      if (action.payload.name === 'male') {
        let male = (action.payload.value);
        if (male) {
          male = 'Male';
        }
        else {
          male = '';
        }
        return {
          ...oldState,
          male,
        };
      }
      return {
        ...oldState,
        [action.payload.name]: action.payload.value,
      };
    }
    default: {
      return oldState;
    }
  }
}
// creation action generateur
export function getActionValue(name, value) {
  return {
    type: 'SET_VALUE',
    payload: {
      name,
      value,
    },
  };
}

function useFilterReducer() {
  const [Filter, filterDispatch] = useReducer(filterReducer, FilterInitial);
  return {
    Filter, filterDispatch,
  };
}

export default useFilterReducer;
