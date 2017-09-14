const event = (state, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      const event = action.event;

      return {
        id: action.event.id,
        title: event.title,
        month: event.month,
        date: event.date,
        type: event.type,
        start: event.start,
        startTime: event.startTime,
        startAMPM: event.startAMPM,
        end: event.end,
        endTime: event.endTime,
        endAMPM: event.endAMPM
      };
    case 'EDIT_EVENT':
      if (state.id === action.event.id) {
        return {
          id: action.event.id,
          title: action.event.title,
          month: action.event.month,
          date: action.event.date,
          type: action.event.type,
          time
        };
      }

      return state;
    default:
      return state;
  }
};

const events = (state = [], action) => {
  let newState = state.slice();
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, event(state, action)];
    case 'EDIT_EVENT':
      return state.map(e => event(e, action));
    case 'DELETE_EVENT':
      newState.splice(action.event.id, 1);
      return newState;
    case 'ADD_TO_DASHBOARD':
      return newState.filter(event => {
        return action.events.indexOf(event.type) === -1;
      });
    default:
      return state;
  }
};

export default events;
