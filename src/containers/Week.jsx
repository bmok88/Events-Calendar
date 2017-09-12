import React, { Component } from 'react';
import { connect } from 'react-redux';

import Day from '../containers/Day';

const Week = ({ week, events, filterTerms }) => {
  const renderDays = () => {
    const days = [];
    const lastDayOfTheWeek = week * 7;

    for (let i = lastDayOfTheWeek - 6; i <= lastDayOfTheWeek; i++) {
      let eventsToPassDown = [];
      events.forEach(event => {
        if (
          parseInt(event.date) === i &&
          filterTerms.indexOf(event.type) === -1
        ) {
          eventsToPassDown.push(event);
        }
      });
      days.push(<Day key={i} date={i} events={eventsToPassDown} />);
    }

    return days;
  };

  return <tr className="week">{renderDays()}</tr>;
};

const mapStateToProps = state => {
  return {
    events: state.events,
    filterTerms: state.filterTerms
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Week);
