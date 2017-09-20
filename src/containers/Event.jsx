import React from 'react';
import { connect } from 'react-redux';

import { editingEvent } from '../actions';

const Event = ({
  id,
  date,
  title,
  time,
  type,
  imageURL,
  onEditClick,
  onDeleteClick,
  onChooseDateClick
}) => {
  return (
    <div className="added-event">
      <div className="event-icon">
        <img src={imageURL} />
      </div>
      <div className="event-info">
        <div
          data-toggle="modal"
          data-target="#event-modal"
          onClick={e => {
            onEditClick(id);
            onChooseDateClick(date);
          }}
        >
          <div className="event-title">{title}</div>
          <div className="event-time">{time}</div>
        </div>
      </div>
      <div
        className="event-delete"
        onClick={e => {
          onDeleteClick(id);
        }}
      >
        <img src="../public/delete-icon.png" />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    editing: state.editing
  };
};

export default connect(mapStateToProps)(Event);
