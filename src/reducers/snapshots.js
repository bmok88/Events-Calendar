const snapshots = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SNAPSHOT':
      return [...state, action.events];
    case 'DELETE_SNAPSHOT':
      const newState = state.slice();
      newState.splice(action.position, 1);

      return newState;
    default:
      return state;
  }
};

export default snapshots;
