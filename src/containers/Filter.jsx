import React from 'react';

const Filter = ({
  src,
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
    <div id="filter">
      <div className="filter-icon">
        <img src={src} />
      </div>
      <div className="filter-event">{event}</div>
      <div className="filter-input">
        <input
          className="filter-checkbox"
          type="checkbox"
          checked={checked}
          value={event}
          onChange={e => {
            console.log(viewSnapshot);
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
    </div>
  );
};

export default Filter;
