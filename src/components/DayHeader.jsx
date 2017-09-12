import React from 'react';

const DayHeader = () => {
  const renderDayHeaders = () => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    return days.map((day, i) => {
      return <th key={i}>{day}</th>;
    });
  };

  return <tr className="week headers">{renderDayHeaders()}</tr>;
};

export default DayHeader;
