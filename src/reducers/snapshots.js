const snapshot = (state, action) => {
  const snapshot = action.snapshot;
  switch (action.type) {
    case 'ADD_SNAPSHOT':
      console.log(action, 'inside adding snapshot');
      return {
        id: snapshot.id,
        name: snapshot.name,
        events: snapshot.events,
        filterTerms: snapshot.filterTerms
      };
    default:
      return state;
  }
};

const snapshots = (state = [], action) => {
  const newState = state.slice();

  switch (action.type) {
    case 'ADD_SNAPSHOT':
      return [...state, snapshot(state, action)];
    case 'DELETE_SNAPSHOT':
      newState.splice(action.position, 1);
      return newState;
    case 'RENAME_SNAPSHOT':
      console.log(action, 'snapshot action');
      newState[action.snapshotId].name = action.name;
      return newState;
    default:
      return state;
  }
};

export default snapshots;
