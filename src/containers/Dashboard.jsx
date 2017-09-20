import React from 'react';
import { connect } from 'react-redux';

import Snapshot from '../components/Snapshot';
import { deleteSnapshot } from '../actions';

const Dashboard = ({ events, snapshots, onDeleteClick }) => {
  const renderSnapshots = () => {
    return snapshots.map((snapshot, i) => {
      return <Snapshot key={i} {...snapshot} onDeleteClick={onDeleteClick} />;
    });
  };

  return <div id="dashboard">{renderSnapshots()}</div>;
};

const mapStateToProps = state => {
  return {
    snapshots: state.snapshots
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteClick: eventId => {
      dispatch(deleteSnapshot(eventId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
