const event = (state, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      console.log('event', action);
      const event = action.event;
      let time = event.hour + ':' + event.minute + event.amPM;
      return {
        id: action.event.id,
        title: event.title,
        month: event.month,
        date: event.date,
        type: event.type,
        time
      };
    case 'EDIT_EVENT':
      if (state.id === action.event.id) {
        let time =
          action.event.hour + ':' + action.event.minute + action.event.amPM;
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
      console.log(action, 'adding to dashb');
      return newState.filter(event => {
        return action.events.indexOf(event.type) === -1;
      });
    default:
      return state;
  }
};

export default events;
