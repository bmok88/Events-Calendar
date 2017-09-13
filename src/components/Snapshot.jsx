import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addFilterTerms } from '../actions';

const Snapshot = ({ snapshot, position, onDeleteClick, addFilterTerms }) => {
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
        addFilterTerms(snapshot.filterTerms);
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

const mapDispatchToProps = dispatch => {
  return {
    addFilterTerms: filterTerms => {
      dispatch(addFilterTerms(filterTerms));
    }
  };
};

export default connect(null, mapDispatchToProps)(Snapshot);
