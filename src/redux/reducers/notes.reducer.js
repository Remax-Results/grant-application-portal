const notesReducer = (state = {}, action) => {
  if(action.type === 'SET_NOTES') {
      return action.payload;
  }
      return state;
};

// user will be on the redux state at:
// state.user
export default notesReducer;
