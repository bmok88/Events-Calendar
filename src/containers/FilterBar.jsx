import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Filter from './Filter.jsx';
import SnapshotModal from '../components/SnapshotModal';

import {
  addFilter,
  removeFilter,
  addEventsToDashboard,
  addASnapshot,
  chooseSnapshot
} from '../actions';

class FilterBar extends Component {
  state = {
    submitted: false
  };

  render() {
    const {
      events,
      filterTerms,
      viewSnapshot,
      addFilterTerm,
      removeFilterTerm,
      addToDashboard,
      addSnapshot
    } = this.props;
    const { submitted } = this.state;

    const handleAddEventsToDashboard = e => {
      const allEvents = [
        'Birthday',
        'Holiday',
        'Company Event',
        'Miscellaneous'
      ];
      const snapshotName =
        e.target.children[4].children[0].children[0].children[1].children[0]
          .children[0].value;
      const inputs = e.target.children;
      const filterTerms = [];
      let snapshotted;

      for (let i = 0; i < 4; i++) {
        if (!inputs[i].children[0].checked) {
          filterTerms.push(inputs[i].children[0].value);
        }
      }

      snapshotted = events
        .filter(event => {
          return filterTerms.indexOf(event.type) === -1;
        })
        .slice(0, 5);
      snapshotted.name = snapshotName;
      snapshotted.filterTerms = filterTerms;

      addSnapshot(snapshotted);
      $('#snapshot-modal').modal('hide');
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

    const renderFilterComponents = () => {
      const events = ['Birthday', 'Holiday', 'Company Event', 'Miscellaneous'];
      return events.map((event, i) => {
        let src;

        if (event === 'Birthday') {
          src = '../public/balloons.png';
        } else if (event === 'Holiday') {
          src = '../public/sun.png';
        } else if (event === 'Company Event') {
          src = '../public/briefcase.png';
        } else {
          src = '../public/push-pin.png';
        }

        return (
          <Filter
            key={i}
            src={src}
            event={event}
            filterTerms={filterTerms}
            viewSnapshot={viewSnapshot}
            addFilterTerm={addFilterTerm}
            removeFilterTerm={removeFilterTerm}
          />
        );
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
            }}
          >
            {renderFilterComponents()}
            <SnapshotModal hideSnapshotModal={hideSnapshotModal} />
            <div id="filter-button">
              <button
                type="button"
                data-toggle="modal"
                data-target="#snapshot-modal"
                className="btn btn-info"
              >
                Add Events to Dashboard
              </button>
            </div>
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
    },
    viewSnapshot: snapshotId => {
      dispatch(chooseSnapshot(snapshotId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
