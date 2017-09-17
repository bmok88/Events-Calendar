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
  console.log('time', time);
  return (
    <div className="added-event">
      <button
        type="button"
        className="modal-button"
        data-toggle="modal"
        data-target="#event-modal"
        onClick={e => {
          onEditClick(id);
          onChooseDateClick(date);
        }}
      >
        <div className="event-info">
          <div>{title}</div>
          <div>{time}</div>
        </div>
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    editing: state.editing
  };
};

export default connect(mapStateToProps)(Event);
