const viewSnapshot = (state = '', action) => {
  switch (action.type) {
    case 'CHOOSE_SNAPSHOT':
      return action.snapshotId;
    default:
      return state;
  }
};

export default viewSnapshot;
