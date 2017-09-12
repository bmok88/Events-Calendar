import React from 'react';
import { connect } from 'react-redux';

import Snapshot from '../components/Snapshot';

const Dashboard = ({ events, snapshots }) => {
  const renderSnapshots = () => {
    return snapshots.map((snapshot, i) => {
      return <Snapshot snapshot={snapshot} key={i} />;
    });
  };

  return <div>{renderSnapshots()}</div>;
};

const mapStateToProps = state => {
  return {
    snapshots: state.snapshots
  };
};

export default connect(mapStateToProps)(Dashboard);
