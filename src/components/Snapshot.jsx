import React from 'react';
import { Link } from 'react-router-dom';

const Snapshot = ({ snapshot }) => {
  const renderSnapshotCard = () => {
    return snapshot.map((shot, i) => {
      return (
        <div key={i}>
          <div>{shot.title}</div>
          <div>{shot.time}</div>
        </div>
      );
    });
  };
  return (
    <div className="snapshot">
      <div className="delete-snapshot">
        <img src="../public/delete.png" width="80px" height="80px" />
      </div>
      <Link to="/calendar">{renderSnapshotCard()}</Link>
    </div>
  );
};

export default Snapshot;
