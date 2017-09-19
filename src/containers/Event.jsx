import React from 'react';
import { connect } from 'react-redux';

import { editingEvent } from '../actions';

const Event = ({
  id,
  date,
  title,
  time,
  type,
  onEditClick,
  onDeleteClick,
  onChooseDateClick
}) => {
  let src;

  if (type === 'Birthday') {
    src = '../public/balloons.png';
  } else if (type === 'Holiday') {
    src = '../public/sun.png';
  } else if (type === 'Company Event') {
    src = '../public/briefcase.png';
  } else {
    src = '../public/push-pin.png';
  }

  return (
    <div className="added-event">
      <div className="event-icon">
        <img src={src} />
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
        <span
          className="delete-button"
          onClick={e => {
            onDeleteClick(id);
          }}
        >
          &times;
        </span>
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
