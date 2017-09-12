import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FilterComponent from './FilterBar';
import {
  addFilter,
  removeFilter,
  addEventsToDashboard,
  addASnapshot
} from '../actions';

const FilterBar = ({
  events,
  filterTerms,
  addFilterTerm,
  removeFilterTerm,
  addToDashboard,
  addSnapshot
}) => {
  const renderFilterComponents = () => {
    const events = ['Birthday', 'Holiday', 'Company Event', 'Miscellaneous'];
    return events.map((event, i) => {
      return (
        <div key={i} className="filter">
          {event}
          <input
            className="filter-checkbox"
            type="checkbox"
            value={event}
            onChange={e => {
              if (!filterTerms.includes(e.target.value)) {
                addFilterTerm(e.target.value);
              } else {
                removeFilterTerm(e.target.value);
              }
            }}
          />
        </div>
      );
    });
  };

  const handleAddEventsToDashboard = e => {
    const children = e.target.children;
    const checkedValues = [];
    let snapshotted;

    for (let i = 0; i < 3; i++) {
      if (children[i].children[0].checked) {
        checkedValues.push(children[i].children[0].value);
      }
    }

    snapshotted = events.filter(event => {
      return checkedValues.indexOf(event.type) === -1;
    });
    console.log('SNAPSHOTS', snapshotted);
    addSnapshot(snapshotted);
  };

  return (
    <div id="filterbar">
      Filter
      <form
        onSubmit={e => {
          e.preventDefault();
          handleAddEventsToDashboard(e);
        }}
      >
        {renderFilterComponents()}
        <button id="filter-button" type="submit" className="btn btn-success">
          Add Events to Dashboard
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    events: state.events,
    filterTerms: state.filterTerms
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFilterTerm: filterTerm => {
      dispatch(addFilter(filterTerm));
    },
    removeFilterTerm: filterTerm => {
      dispatch(removeFilter(filterTerm));
    },
    addToDashboard: events => {
      dispatch(addEventsToDashboard(events));
    },
    addSnapshot: events => {
      dispatch(addASnapshot(events));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
