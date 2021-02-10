const activeGreeting = (state = [], action) => {
    if(action.type === 'SET_ACTIVE_GREETING') {
        return action.payload;
    }
        return state;
  };
  
  // user will be on the redux state at:
  // state.user
  export default activeGreeting;