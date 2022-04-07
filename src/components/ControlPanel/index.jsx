import React from 'react';
import PropTypes from 'prop-types';
import { visibilityFilters } from '@/constants/actions';

function ControlPanel({ active, setVisibilityFilter }) {
  const choiceFilter = (filter) => {
    setVisibilityFilter(filter);
  };

  return (
    <div>
      <span>Show: </span>
      {visibilityFilters.map((item) => (
        <button
          type="button"
          disabled={active(item)}
          key={item}
          onClick={choiceFilter.bind(this, item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

ControlPanel.propTypes = {
  active: PropTypes.func.isRequired,
  setVisibilityFilter: PropTypes.func.isRequired,
};

export default ControlPanel;
