import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SnapshotModal from './SnapshotModal';
import {
  addFilterTerms,
  chooseSnapshot,
  editSnapshot,
  renameSnapshot
} from '../actions';

const Snapshot = ({
  id,
  name,
  events,
  editingSnapshot,
  addFilters,
  filterTerms,
  viewSnapshot,
  onDeleteClick,
  snapshotRename
}) => {
  const renderCard = () => {
    return events.map((s, i) => {
      return (
        <div className="event-snapshot" key={i}>
          <span>{s.title}</span>
          <span>{' ' + s.month.substr(0, 3) + ' ' + s.date + ' '}</span>
          <span>{`${s.start} - ${s.end}`}</span>
        </div>
      );
    });
  };

  const handleSnapshotRename = (snapshotId, e) => {
    const snapshotName =
      e.target.children[0].children[0].children[0].children[1].children[0]
        .children[0].value;
    console.log(snapshotId, 'snapshot id');
    snapshotRename(snapshotId, snapshotName);
  };

  return (
    <div className="snapshot">
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSnapshotRename(id, e);
        }}
      >
        <SnapshotModal />
      </form>
      <button type="button" data-toggle="modal" data-target="#snapshot-modal">
        <h2>{name}</h2>
        <h3>{id}</h3>
      </button>
      <div
        className="delete-snapshot"
        onClick={e => {
          onDeleteClick(id);
          viewSnapshot('');
        }}
      >
        <img src="../public/delete.png" width="80px" height="80px" />
      </div>
      {renderCard()}
      <div>
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
    },
    snapshotRename: (snapshotId, name) => {
      dispatch(renameSnapshot(snapshotId, name));
    }
    // editingSnapshot: snapshotId => {
    //   dispatch(editSnapshot(snapshotId));
    // }
  };
};

export default connect(null, mapDispatchToProps)(Snapshot);
