const viewSnapshot = (state = '', action) => {
  switch (action.type) {
    case 'VIEW_SNAPSHOT':
      return action.snapshotId;
    default:
      return state;
  }
};

export default viewSnapshot;
