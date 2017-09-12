const editing = (state = '', action) => {
  switch (action.type) {
    case 'EDITING_EVENT':
      return action.eventId;
    default:
      return state;
  }
};

export default editing;
