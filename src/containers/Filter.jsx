import React from 'react';

const Filter = ({
  event,
  filterTerms,
  viewSnapshot,
  addFilterTerm,
  removeFilterTerm
}) => {
  let checked = true;
  if (filterTerms.indexOf(event) !== -1) {
    checked = false;
  }

  return (
    <div className="filter">
      {event}
      <input
        className="filter-checkbox"
        type="checkbox"
        checked={checked}
        value={event}
        onChange={e => {
          viewSnapshot('');
          if (!filterTerms.includes(e.target.value)) {
            addFilterTerm(e.target.value);
          } else {
            removeFilterTerm(e.target.value);
          }
          e.target.checked = false;
        }}
      />
    </div>
  );
};

export default Filter;
