import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addFilterTerms, chooseSnapshot } from '../actions';

const Snapshot = ({
  id,
  snapshot,
  position,
  addFilters,
  filterTerms,
  viewSnapshot,
  onDeleteClick
}) => {
  const renderCard = () => {
    return snapshot
      .sort((a, b) => {
        return a.date > b.date ? 1 : a.date < b.date ? -1 : 0;
      })
      .map((s, i) => {
        return (
          <Link to="/calendar" key={i}>
            <div className="event-snapshot">
              <span>{s.title}</span>
              <span>{' ' + s.month.substr(0, 3) + ' ' + s.date + ' '}</span>
              <span>{`${s.start} - ${s.end}`}</span>
            </div>
          </Link>
        );
      });
  };

  return (
    <div
      className="snapshot"
      onClick={e => {
        viewSnapshot(id);
        addFilters(snapshot.filterTerms);
      }}
    >
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
