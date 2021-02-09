const allHeaders = (state = [], action) => {
    if(action.type === 'SET_ALL_HEADERS') {
        return action.payload;
    }
        return state;
  };
  
  // user will be on the redux state at:
  // state.user
  export default allHeaders;