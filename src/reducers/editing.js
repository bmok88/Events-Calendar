const editing = (state = '', action) => {
  switch (action.type) {
    case 'EDITING_EVENT':
      return action.eventId;
    case 'EDITING_SNAPSHOT':
      return action.snapshotId;
    default:
      return state;
  }
};

export default editing;
