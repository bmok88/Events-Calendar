import React from 'react';

const FilterComponents = ({ filterTerms, addFilterTerm, removeFilterTerm }) => {
  const renderFilterComponents = () => {
    const events = ['Birthday', 'Holiday', 'Company Event', 'Miscellaneous'];
    return events.map((event, i) => {
      return (
        <div key={i} className="filter">
          {event}
          <input
            className="filter-checkbox"
            type="checkbox"
            checked={true}
            value={event}
            onChange={e => {
              if (!filterTerms.includes(e.target.value)) {
                addFilterTerm(e.target.value);
              } else {
                removeFilterTerm(e.target.value);
              }
              e.target.checked = false;
              console.log(e.target.checked, 'input');
            }}
          />
        </div>
      );
    });
  };

  return <div>{renderFilterComponents()}</div>;
};

export default FilterComponents;
