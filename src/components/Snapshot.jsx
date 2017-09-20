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
        <div className="snapshot-event" key={i}>
          <span className="snapshot-event-icon">
            <img src={s.imageURL} height="40px" width="40px" />
          </span>
          <span className="snapshot-event-name">{s.title}</span>
          <span className="snapshot-event-date">
            {' ' + s.month.substr(0, 3) + ' ' + s.date + ' '}
          </span>
          <span className="snapshot-event-time">{`${s.start} - ${s.end}`}</span>
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
      <div className="snapshot-header">
        <div
          className="snapshot-name"
          data-toggle="modal"
          data-target="#snapshot-modal"
          onClick={e => {
            onSnapshotClick(id);
          }}
        >
          <span>{name}</span>
        </div>
        <div
          className="snapshot-delete"
          onClick={e => {
            onDeleteClick(id);
            onViewSnapshotCalendarClick('');
          }}
        >
          <img src="../public/delete.png" width="55px" height="55px" />
        </div>
      </div>
      <div className="all-events">{renderCard()}</div>
      <div className="snapshot-footer">
        <Link
          to="/calendar"
          className="snapshot-link"
          style={{ textDecoration: 'none' }}
        >
          <div
            onClick={() => {
              addFilters(filterTerms);
              onViewSnapshotCalendarClick(id);
            }}
          >
            <img src="../public/calendar.png" width="40px" height="40px" />
            <span className="link-calendar">View all in calendar</span>
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
