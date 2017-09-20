const event = (state, action) => {
  const event = action.event;
  switch (action.type) {
    case 'ADD_EVENT':
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
        endAMPM: event.endAMPM,
        imageURL: event.imageURL
      };
    case 'EDIT_EVENT':
      if (state.id === action.event.id) {
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
          endAMPM: event.endAMPM,
          imageURL: event.imageURL
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
      return state.filter(event => {
        return event.id !== action.eventId;
      });
    case 'ADD_TO_DASHBOARD':
      return newState.filter(event => {
        return action.events.indexOf(event.type) === -1;
      });
    default:
      return state;
  }
};

export default events;
