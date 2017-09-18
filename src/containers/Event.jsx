import React from 'react';
import { connect } from 'react-redux';

import { editingEvent } from '../actions';

const Event = ({
  id,
  date,
  title,
  time,
  onEditClick,
  onDeleteClick,
  onChooseDateClick
}) => {
  return (
    <div className="added-event">
      <div
        className="event-info"
        data-toggle="modal"
        data-target="#event-modal"
        onClick={e => {
          onEditClick(id);
          onChooseDateClick(date);
        }}
      >
        <div>{title}</div>
        <div>{time}</div>
      </div>
      <span
        className="delete-button"
        onClick={e => {
          onDeleteClick(id);
        }}
      >
        &times;
      </span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    editing: state.editing
  };
};

export default connect(mapStateToProps)(Event);
