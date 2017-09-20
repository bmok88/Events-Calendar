export const addEvent = event => ({
  type: 'ADD_EVENT',
  event
});

export const editEvent = event => ({
  type: 'EDIT_EVENT',
  event
});

export const deleteEvent = eventId => ({
  type: 'DELETE_EVENT',
  eventId
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

export const addASnapshot = snapshot => ({
  type: 'ADD_SNAPSHOT',
  snapshot
});

export const chooseDate = date => ({
  type: 'CHOOSE_DATE',
  date
});

export const editingEvent = eventId => ({
  type: 'EDITING_EVENT',
  eventId
});

export const deleteSnapshot = position => ({
  type: 'DELETE_SNAPSHOT',
  position
});

export const viewSnapshot = snapshotId => ({
  type: 'VIEW_SNAPSHOT',
  snapshotId
});

export const addFilterTerms = filterTerms => ({
  type: 'ADD_FILTERTERMS',
  filterTerms
});

export const renameSnapshot = (snapshotId, name) => ({
  type: 'RENAME_SNAPSHOT',
  snapshotId,
  name
});

export const editSnapshot = snapshotId => ({
  type: 'EDITING_SNAPSHOT',
  snapshotId
});
