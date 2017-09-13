const filterTerms = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FILTER':
      return [...state, action.filterTerm];
    case 'REMOVE_FILTER':
      return state.filter(f => f !== action.filterTerm);
    case 'ADD_FILTERTERMS':
      return action.filterTerms;
    default:
      return state;
  }
};

export default filterTerms;
