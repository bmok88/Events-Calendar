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
  onChooseDateClick,
  showModal
}) => {
  return (
    <div className="added-event">
      <div
        className="event-info"
        onClick={e => {
          e.stopPropagation();
          showModal();
          onEditClick(id);
          onChooseDateClick(date);
        }}
      >
        <div>{title}</div>
        <div>{time}</div>
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

