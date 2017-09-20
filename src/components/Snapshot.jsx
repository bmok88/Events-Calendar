import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SnapshotModal from './SnapshotModal';
import {
  addFilterTerms,
  viewSnapshot,
  editSnapshot,
  renameSnapshot
} from '../actions';

const Snapshot = ({
  id,
  name,
  events,
  editing,
  filterTerms,
  onSnapshotClick,
  addFilters,
  onViewSnapshotCalendarClick,
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

  const handleSnapshotRename = e => {
    const snapshotName =
      e.target.children[0].children[0].children[0].children[1].children[0]
        .children[0].value;

    snapshotRename(editing, snapshotName);
  };

  return (
    <div className="snapshot">
      <form
        onSubmit={e => {
          e.preventDefault();
          handleSnapshotRename(e);
          $('#snapshot-modal').modal('hide');
        }}
      >
        <SnapshotModal />
      </form>
      <button
        type="button"
        data-toggle="modal"
        data-target="#snapshot-modal"
        onClick={e => {
          onSnapshotClick(id);
        }}
      >
        <h2>{name}</h2>
      </button>
      <div
        className="delete-snapshot"
        onClick={e => {
          onDeleteClick(id);
          onViewSnapshotCalendarClick('');
        }}
      >
        <img src="../public/delete.png" width="80px" height="80px" />
      </div>
      {renderCard()}
      <div>
        <Link to="/calendar" className="snapshot-link">
          <div
            onClick={() => {
              addFilters(filterTerms);
              onViewSnapshotCalendarClick(id);
            }}
          >
            View in calendar
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    editing: state.editing
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onViewSnapshotCalendarClick: snapshotId => {
      dispatch(viewSnapshot(snapshotId));
    },
    addFilters: filterTerms => {
      dispatch(addFilterTerms(filterTerms));
    },
    snapshotRename: (snapshotId, name) => {
      dispatch(renameSnapshot(snapshotId, name));
    },
    onSnapshotClick: snapshotId => {
      dispatch(editSnapshot(snapshotId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Snapshot);
