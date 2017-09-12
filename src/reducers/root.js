import { combineReducers } from 'redux';

import date from './date';
import events from './events';
import editing from './editing';
import snapshots from './snapshots';
import filterTerms from './filterTerms';

const eventsCalendar = combineReducers({
  date,
  events,
  editing,
  snapshots,
  filterTerms
});

export default eventsCalendar;
