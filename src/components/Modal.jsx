import React from 'react';
import { connect } from 'react-redux';

import SelectMonth from '../containers/SelectMonth';
import SelectDate from '../containers/SelectDate';
import SelectHour from '../containers/SelectHour';
import SelectMinute from '../containers/SelectMinute';
import SelectEvent from '../containers/SelectEvent';

let eventId = 0;

const Modal = ({
  date,
  edit,
  editing,
  onDayClick,
  onEventClick,
  onChooseDateClick
}) => {
  const handleFormSubmit = e => {
    const form = e.target.children;
    const type = form[0].value;
    const title = form[1].value;
    const month = form[2].value;
    const date = form[3].value;
    const hour = form[4].value;
    const minute = form[5].value;
    const amPM = form[6].value;
    const id = editing !== '' ? editing : eventId++;
    const modal = document.getElementById('event-modal');

    const event = {
      type,
      title,
      month,
      date,
      hour,
      minute,
      amPM,
      id
    };

    console.log('editing', editing);
    if (editing !== '') {
      onEventClick(event);
    } else {
      onDayClick(event);
    }
    modal.style.display = 'none';
  };

  return (
    <div
      id="event-modal"
      className="modal"
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <div className="modal-content">
        Event
        <form
          id="event-form"
          onSubmit={e => {
            e.preventDefault();
            handleFormSubmit(e);
          }}
        >
          Event type
          <SelectEvent />
          Name
          <input type="text" />
          Month
          <SelectMonth />
          Date
          <SelectDate onChooseDateClick={onChooseDateClick} />
          Hour
          <SelectHour />
          Minute
          <SelectMinute />
          <select>
            <option value="AM">AM</option>
            <option value="AM">PM</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    editing: state.editing
  };
};

export default connect(mapStateToProps)(Modal);
