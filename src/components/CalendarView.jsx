import React, { Component } from 'react';

import FilterBar from '../containers/FilterBar';
import Calendar from './Calendar';

const CalendarView = () => (
  <div id="calendarview-container">
    <FilterBar />
    <Calendar />
  </div>
);

export default CalendarView;
