import React, { Component } from 'react';
import { connect } from 'react-redux';

import Day from '../containers/Day';

const Week = ({ week, events, filterTerms, snapshots, viewSnapshot }) => {
  const renderDays = () => {
    const days = [];
    const lastDayOfTheWeek = week * 7;
    for (let i = lastDayOfTheWeek - 6; i <= lastDayOfTheWeek; i++) {
      let eventsToPassDown = [];

      if (viewSnapshot === '') {
        events.forEach(event => {
          let date = parseInt(event.date);
          if (date === i && filterTerms.indexOf(event.type) === -1) {
            eventsToPassDown.push(event);
          }
        });
      } else {
        snapshots[viewSnapshot].forEach(event => {
          let date = parseInt(event.date);
          if (date === i && filterTerms.indexOf(event.type) === -1) {
            eventsToPassDown.push(event);
          }
        });
      }
      days.push(<Day key={i} date={i} events={eventsToPassDown} />);
    }

    return days;
  };

  return <tr className="week">{renderDays()}</tr>;
};

const mapStateToProps = state => {
  return {
    events: state.events,
    snapshots: state.snapshots,
    filterTerms: state.filterTerms,
    viewSnapshot: state.viewSnapshot
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Week);
