import { combineReducers } from 'redux';

import date from './date';
import events from './events';
import editing from './editing';
import snapshots from './snapshots';
import filterTerms from './filterTerms';
import viewSnapshot from './viewSnapshot';

const eventsCalendar = combineReducers({
  date,
  events,
  editing,
  snapshots,
  filterTerms,
  viewSnapshot
});

export default eventsCalendar;
