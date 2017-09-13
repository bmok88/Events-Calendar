import React from 'react';
import { connect } from 'react-redux';

import SelectMonth from '../containers/SelectMonth';
import SelectDate from '../containers/SelectDate';
import SelectHour from '../containers/SelectHour';
import SelectMinute from '../containers/SelectMinute';
import SelectEvent from '../containers/SelectEvent';

import { chooseSnapshot } from '../actions';

let eventId = 0;

const Modal = ({
  date,
  edit,
  editing,
  onDayClick,
  viewSnapshot,
  onEventClick,
  onChooseDateClick
}) => {
  const handleFormSubmit = e => {
    const form = e.target.children;
    const type = form[0].value;
    const title = form[1].value;
    const month = form[2].value;
    const date = form[3].value;
    const startHour = form[4].value;
    const startMinute = form[5].value;
    const startAmPM = form[6].value;
    const endHour = form[7].value;
    const endMinute = form[8].value;
    const endAmPM = form[9].value;
    const time = `${startHour}:${startMinute +
      startAmPM} - ${endHour}:${endMinute + endAmPM}`;
    const id = editing !== '' ? editing : eventId++;
    const modal = document.getElementById('event-modal');

    const event = {
      type,
      title,
      month,
      date,
      time,
      id
    };
    console.log('new event', event);

    if (editing !== '') {
      onEventClick(event);
    } else {
      onDayClick(event);
    }
    viewSnapshot('');
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
          Start Time
          <SelectHour />
          <SelectMinute />
          <select>
            <option value="AM">AM</option>
            <option value="AM">PM</option>
          </select>
          End Time
          <SelectHour />
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

const mapDispatchToProps = dispatch => {
  return {
    viewSnapshot: snapshotId => {
      dispatch(chooseSnapshot(snapshotId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
