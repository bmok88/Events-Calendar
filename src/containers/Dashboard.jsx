import React from 'react';
import { connect } from 'react-redux';

import Snapshot from '../components/Snapshot';
import { deleteSnapshot } from '../actions';

const Dashboard = ({ events, snapshots, onDeleteClick }) => {
  const renderSnapshots = () => {
    return snapshots.map((snapshot, i) => {
      return (
        <Snapshot
          snapshot={snapshot}
          key={i}
          position={i}
          onDeleteClick={onDeleteClick}
        />
      );
    });
  };

  return <div>{renderSnapshots()}</div>;
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
