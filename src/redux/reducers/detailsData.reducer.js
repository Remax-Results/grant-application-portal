const detailsDataReducer = (state = {}, action) => {
  if(action.type === 'SET_DETAILS_DATA') {
      return action.payload;
  }
      return state;
};

// user will be on the redux state at:
// state.user
export default detailsDataReducer;
