import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import FilterComponents from '../components/FilterComponents';
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
  const handleAddEventsToDashboard = e => {
    const inputs = e.target.children[0].children;
    const checkedValues = [];
    let snapshotted;

    for (let i = 0; i < 4; i++) {
      console.log('inputs', inputs[i].children[0].checked);
      if (inputs[i].children[0].checked) {
        checkedValues.push(inputs[i].children[0].value);
      }
    }
    console.log('checkedValues', checkedValues);
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
        <FilterComponents
          filterTerms={filterTerms}
          addFilterTerm={addFilterTerm}
          removeFilterTerm={removeFilterTerm}
        />
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
    addSnapshot: events => {
      dispatch(addASnapshot(events));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
