import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import FilterComponents from '../components/FilterComponents';
import SnapshotModal from '../components/SnapshotModal';

import {
  addFilter,
  removeFilter,
  addEventsToDashboard,
  addASnapshot
} from '../actions';

class FilterBar extends Component {
  state = {
    submitted: false
  };

  render() {
    const {
      events,
      filterTerms,
      addFilterTerm,
      removeFilterTerm,
      addToDashboard,
      addSnapshot
    } = this.props;
    const { submitted } = this.state;
    const handleAddEventsToDashboard = e => {
      console.log(e.target.children[1].children[0].children[1].value);
      const snapshotName = e.target.children[1].children[0].children[1].value;
      const inputs = e.target.children[0].children;
      const checkedValues = [];
      let snapshotted;

      for (let i = 0; i < 4; i++) {
        if (inputs[i].children[0].checked) {
          checkedValues.push(inputs[i].children[0].value);
        }
      }

      snapshotted = events.filter(event => {
        return checkedValues.indexOf(event.type) === -1;
      });

      snapshotted.name = snapshotName;
      addSnapshot(snapshotted);
      hideSnapshotModal();
    };

    const showSnapshotModal = () => {
      const snapshotModal = document.getElementById('snapshot-modal');
      snapshotModal.style.display = 'block';
    };

    const hideSnapshotModal = () => {
      const snapshotModal = document.getElementById('snapshot-modal');
      snapshotModal.style.display = 'none';
    };

    const handleRedirect = () => {
      this.setState({
        submitted: true
      });
    };

    if (!submitted) {
      return (
        <div id="filterbar">
          Filter
          <form
            to={'/dashboard'}
            onSubmit={e => {
              e.preventDefault();
              handleAddEventsToDashboard(e);
              handleRedirect();
            }}
          >
            <FilterComponents
              filterTerms={filterTerms}
              addFilterTerm={addFilterTerm}
              removeFilterTerm={removeFilterTerm}
            />
            <SnapshotModal hideSnapshotModal={hideSnapshotModal} />
            <button
              id="filter-button"
              type="button"
              className="btn btn-success"
              onClick={() => showSnapshotModal()}
            >
              Add Events to Dashboard
            </button>
          </form>
        </div>
      );
    }

    return <Redirect to="/dashboard" />;
  }
}

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
