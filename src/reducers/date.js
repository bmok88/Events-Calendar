const date = (state = [], action) => {
  switch (action.type) {
    case 'CHOOSE_DATE':
      return action.date;
    default:
      return state;
  }
};

export default date;
