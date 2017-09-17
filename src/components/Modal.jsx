import React from 'react';
import { connect } from 'react-redux';

import SelectMonth from '../containers/SelectMonth';
import SelectDate from '../containers/SelectDate';
import SelectHour from '../containers/SelectHour';
import SelectMinute from '../containers/SelectMinute';
import SelectEvent from '../containers/SelectEvent';
import SelectAMPM from '../containers/SelectAMPM';

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
    const startAMPM = form[6].value;
    const startMinute = form[5].value;
    const endMinute = form[8].value;
    const endAMPM = form[9].value;
    const id = editing !== '' ? editing : eventId++;
    const modal = document.getElementById('event-modal');
    let startTime;
    let endTime;
    let start;
    let end;

    if (startAMPM === 'PM') {
      if (form[4].value === '12') {
        startTime = `${form[4].value}${startMinute}`;
      } else {
        startTime = parseInt(form[4].value) + 12 + startMinute;
      }
    } else {
      if (form[4].value === '12') {
        startTime = `0${startMinute}`;
      } else {
        startTime = `${form[4].value}${startMinute}`;
      }
    }

    if (endAMPM === 'PM') {
      if (form[7].value === '12') {
        endTime = `${form[7].value}${endMinute}`;
      } else {
        endTime = parseInt(form[7].value) + 12 + endMinute;
      }
    } else {
      if (form[7].value === '12') {
        endTime = `0${endMinute}`;
      } else {
        endTime = `${form[7].value}${endMinute}`;
      }
    }
    console.log(startTime, 'startTime', 'endTime', endTime);

    if (startTime.length === 4) {
      if (parseInt(startTime.slice(0, 2)) > 12) {
        start =
          parseInt(startTime.slice(0, 2)) -
          12 +
          ':' +
          startTime.slice(2) +
          startAMPM;
      } else {
        start = startTime.slice(0, 2) + ':' + startTime.slice(2) + startAMPM;
      }
    } else {
      if (startTime[0] === '0') {
        start = '12:' + startTime.slice(1) + startAMPM;
      } else {
        start = startTime.slice(0, 1) + ':' + startTime.slice(1) + startAMPM;
      }
    }

    if (endTime.length === 4) {
      if (parseInt(endTime.slice(0, 2)) > 12) {
        end =
          parseInt(endTime.slice(0, 2)) - 12 + ':' + endTime.slice(2) + endAMPM;
      } else {
        end = endTime.slice(0, 2) + ':' + endTime.slice(2) + endAMPM;
      }
    } else {
      if (endTime[0] === '0') {
        end = '12:' + endTime.slice(1) + 'AM';
      } else {
        end = endTime.slice(0, 1) + ':' + endTime.slice(1) + endAMPM;
      }
    }

    const event = {
      type,
      title,
      month,
      date,
      start,
      startTime,
      end,
      endTime,
      startAMPM,
      endAMPM,
      id
    };

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
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      aria-hidden="true"
      aria-labelledby="event-modalLabel"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add/Edit Event</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
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
              <SelectAMPM />
              End Time
              <SelectHour />
              <SelectMinute />
              <SelectAMPM />
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
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
