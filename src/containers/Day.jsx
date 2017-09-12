import React from 'react';
import { connect } from 'react-redux';

import Event from './Event';
import ModalComponent from '../components/ModalComponent';

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
  const showModal = show => {
    let modal = document.getElementById('event-modal');
    modal.style.display = 'block';
  };

  const mapAndRenderEvents = () => {
    return events.map((event, i) => {
      return (
        <Event
          key={i}
          id={event.id}
          date={date}
          time={event.time}
          title={event.title}
          showModal={showModal}
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
      <td
        onClick={e => {
          onEditClick('');
          console.log('no events');
          const eventModal = document.getElementById('event-modal').style;
          if (!eventModal.display || eventModal.display === 'none') {
            showModal();
            onChooseDateClick(date);
          }
        }}
      >
        <div className="day">{date}</div>
        <ModalComponent
          date={date}
          onDayClick={onDayClick}
          onEventClick={onEventClick}
          onChooseDateClick={onChooseDateClick}
        />
      </td>
    );
  } else {
    return (
      <td
        onClick={e => {
          console.log('events');
          onEditClick('');
          const eventModal = document.getElementById('event-modal').style;
          if (!eventModal.display || eventModal.display === 'none') {
            showModal();
            onChooseDateClick(date);
          }
        }}
      >
        <div className="day">{date}</div>
        {mapAndRenderEvents()}
        <ModalComponent
          date={date}
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
