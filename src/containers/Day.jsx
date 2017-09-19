import React from 'react';
import { connect } from 'react-redux';

import Event from './Event';
import Modal from '../components/Modal';

import {
  addEvent,
  chooseDate,
  editEvent,
  deleteEvent,
  toggleModal,
  editingEvent
} from '../actions';

const Day = ({
  date,
  events,
  onDayClick,
  onEventClick,
  onDeleteClick,
  onEditClick,
  onChooseDateClick
}) => {
  const hideModal = () => {
    let modal = document.getElementById('event-modal');
    modal.style.display = 'none';
  };

  const mapAndRenderEvents = () => {
    return events
      .sort((a, b) => {
        return parseInt(a.startTime) > parseInt(b.startTime)
          ? 1
          : parseInt(a.startTime) < parseInt(b.startTime) ? -1 : 0;
      })
      .map((event, i) => {
        let time = `${event.start} - ${event.end}`;
        return (
          <Event
            key={i}
            {...event}
            date={date}
            time={time}
            onEventClick={onEventClick}
            onEditClick={onEditClick}
            onChooseDateClick={onChooseDateClick}
            onDeleteClick={onDeleteClick}
          />
        );
      });
  };

  if (!events.length) {
    return (
      <td>
        <div
          className="modal-button"
          data-toggle="modal"
          data-target="#event-modal"
          onClick={e => {
            onEditClick('');
            onChooseDateClick(date);
          }}
        />
        <div className="day">{date}</div>
        <Modal
          date={date}
          hideModal={hideModal}
          onDayClick={onDayClick}
          onEventClick={onEventClick}
          onChooseDateClick={onChooseDateClick}
        />
      </td>
    );
  } else {
    return (
      <td>
        <div
          className="modal-button"
          data-toggle="modal"
          data-target="#event-modal"
          onClick={e => {
            onEditClick('');
            onChooseDateClick(date);
          }}
        />
        <div className="day">{date}</div>
        {mapAndRenderEvents()}
        <Modal
          date={date}
          hideModal={hideModal}
          onDayClick={onDayClick}
          onEventClick={onEventClick}
          onChooseDateClick={onChooseDateClick}
        />
      </td>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onEventClick: event => {
      dispatch(editEvent(event));
    },
    onDeleteClick: event => {
      dispatch(deleteEvent(event));
    },
    onDayClick: event => {
      dispatch(addEvent(event));
    },
    onChooseDateClick: date => {
      dispatch(chooseDate(date));
    },
    onEditClick: eventId => {
      dispatch(editingEvent(eventId));
    }
  };
};

export default connect(null, mapDispatchToProps)(Day);

// {renderModalContent(date)}
