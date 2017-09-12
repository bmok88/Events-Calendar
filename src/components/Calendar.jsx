import React from 'react';

import PickMonth from '../containers/PickMonth';
import Month from './Month';

const Calendar = () => {
  const renderDaysHeaders = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days.map((day, i) => {
      return <th key={i}>{day}</th>;
    });
  };

  return (
    <div id="month-container">
      <PickMonth />
      <table id="month">
        <thead>
          <tr>{renderDaysHeaders()}</tr>
        </thead>
        <Month />
      </table>
    </div>
  );
};

export default Calendar;
