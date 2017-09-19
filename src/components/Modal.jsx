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
  hideModal,
  onDayClick,
  viewSnapshot,
  onEventClick,
  onChooseDateClick
}) => {
  const handleFormSubmit = e => {
    const form = e.target.children[0];
    const type = form.children[0].children[1].children[0].value;
    const title = form.children[1].children[1].children[0].value;
    const month = form.children[2].children[0].children[1].children[0].value;
    const date = form.children[2].children[1].children[1].children[0].value;
    const startHour = form.children[3].children[1].children[0].value;
    const startMinute = form.children[3].children[2].children[0].value;
    const startAMPM = form.children[3].children[3].children[0].value;
    const endHour = form.children[4].children[1].children[0].value;
    const endMinute = form.children[4].children[2].children[0].value;
    const endAMPM = form.children[4].children[3].children[0].value;
    const id = editing !== '' ? editing : eventId++;
    let startTime;
    let endTime;
    let start;
    let end;

    if (startAMPM === 'PM') {
      if (startHour === '12') {
        startTime = `${startHour}${startMinute}`;
      } else {
        startTime = parseInt(startHour) + 12 + startMinute;
      }
    } else {
      if (startHour === '12') {
        startTime = `0${startMinute}`;
      } else {
        startTime = `${startHour}${startMinute}`;
      }
    }

    if (endAMPM === 'PM') {
      if (endHour === '12') {
        endTime = `${endHour}${endMinute}`;
      } else {
        endTime = parseInt(endHour) + 12 + endMinute;
      }
    } else {
      if (endHour === '12') {
        endTime = `0${endMinute}`;
      } else {
        endTime = `${endHour}${endMinute}`;
      }
    }

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
    form.children[1].children[1].children[0].value = '';
  };

  return (
    <div
      id="event-modal"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
      aria-labelledby="event-modalLabel"
    >
      <div className="modal-dialog" style={{ minWidth: '1000px' }}>
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
          <form
            id="event-form"
            onSubmit={e => {
              e.preventDefault();
              handleFormSubmit(e);
              $('#event-modal').modal('hide');
            }}
          >
            <div className="modal-body">
              <div className="select event">
                <div>Event type</div>
                <span>
                  <SelectEvent />
                </span>
              </div>
              <div className="select name">
                <div>Name</div>
                <div className="col-12">
                  <input
                    type="text"
                    id="modal-input"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="select date">
                <div>
                  <div>Month</div>
                  <span>
                    <SelectMonth />
                  </span>
                </div>
                <div>
                  <div>Date</div>
                  <span>
                    <SelectDate onChooseDateClick={onChooseDateClick} />
                  </span>
                </div>
              </div>
              <div className="select start">
                <div>Start Time</div>
                <span>
                  <SelectHour />
                </span>
                <span>
                  <SelectMinute />
                </span>
                <span>
                  <SelectAMPM />
                </span>
              </div>
              <div className="select end">
                <div>End Time</div>
                <span>
                  <SelectHour />
                </span>
                <span>
                  <SelectMinute />
                </span>
                <span>
                  <SelectAMPM />
                </span>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  aria-label="Save"
                  className="btn btn-primary"
                >
                  <span aria-hidden="true">Save</span>
                </button>
              </div>
            </div>
          </form>
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
