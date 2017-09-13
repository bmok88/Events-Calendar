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
    return snapshot.map((s, i) => {
      return (
        <Link to="/calendar" key={i}>
          <div>{s.title}</div>
          <div>{s.time}</div>
        </Link>
      );
    });
  };

  return (
    <div
      className="snapshot"
      onClick={e => {
        console.log('filterTerms', snapshot.filterTerms);
        viewSnapshot(id);
        addFilters(snapshot.filterTerms);
      }}
    >
      <h2>{snapshot.name}</h2>
      <div
        className="delete-snapshot"
        onClick={e => {
          onDeleteClick(position);
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
