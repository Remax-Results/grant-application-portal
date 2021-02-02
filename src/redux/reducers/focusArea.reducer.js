const focusArea = (state = [], action) => {
    if(action.type === 'SET_FOCUS_AREA') {
        return action.payload;
    }
        return state;
  };
  
  // user will be on the redux state at:
  // state.user
  export default focusArea;