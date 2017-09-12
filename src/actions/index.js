export const addEvent = event => ({
  type: 'ADD_EVENT',
  event
});

export const editEvent = event => ({
  type: 'EDIT_EVENT',
  event
});

export const deleteEvent = event => ({
  type: 'DELETE_EVENT',
  event
});

export const addFilter = filterTerm => ({
  type: 'ADD_FILTER',
  filterTerm
});

export const removeFilter = filterTerm => ({
  type: 'REMOVE_FILTER',
  filterTerm
});

export const addEventsToDashboard = events => ({
  type: 'ADD_TO_DASHBOARD',
  events
});

export const addASnapshot = events => ({
  type: 'ADD_SNAPSHOT',
  events
});

export const chooseDate = date => ({
  type: 'CHOOSE_DATE',
  date
});

export const editingEvent = eventId => ({
  type: 'EDITING_EVENT',
  eventId
});

export const deleteSnapshot = eventId => ({
  type: 'DELETE_SNAPSHOT',
  eventId
});
