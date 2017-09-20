import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addFilterTerms, chooseSnapshot } from '../actions';

const Snapshot = ({
  id,
  position,
  snapshot,
  addFilters,
  filterTerms,
  viewSnapshot,
  onDeleteClick
}) => {
  const renderCard = () => {
    return (
      snapshot
        // .sort((a, b) => {
        //   return parseInt(a.startTime) > parseInt(b.startTime)
        //     ? 1
        //     : parseInt(a.startTime) < parseInt(b.startTime) ? -1 : 0;
        // })
        .map((s, i) => {
          return (
            <div className="event-snapshot" key={i}>
              <span>{s.title}</span>
              <span>{' ' + s.month.substr(0, 3) + ' ' + s.date + ' '}</span>
              <span>{`${s.start} - ${s.end}`}</span>
            </div>
          );
        })
    );
  };

  return (
    <div className="snapshot">
      <h2>{snapshot.name}</h2>
      <div
        className="delete-snapshot"
        onClick={e => {
          onDeleteClick(position);
          viewSnapshot('');
        }}
      >
        <img src="../public/delete.png" width="80px" height="80px" />
      </div>
      {renderCard()}
      <div
        onClick={e => {
          viewSnapshot(id);
          addFilters(snapshot.filterTerms);
          console.log('adding filterTerms', snapshot);
        }}
      >
        <Link to="/calendar" className="snapshot-link">
          View in calendar
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filterTerms: state.filterTerms
  };
};

const mapDispatchToProps = dispatch => {
  return {
    viewSnapshot: snapshotId => {
      dispatch(chooseSnapshot(snapshotId));
    },
    addFilters: filterTerms => {
      dispatch(addFilterTerms(filterTerms));
    }
  };
};

export default connect(null, mapDispatchToProps)(Snapshot);
