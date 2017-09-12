import React from 'react';
import { Link } from 'react-router-dom';

const Snapshot = ({ snapshot, position, onDeleteClick }) => {
  console.log(snapshot, 'snapshot');
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
    <div className="snapshot">
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

export default Snapshot;
