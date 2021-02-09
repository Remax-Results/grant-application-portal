const allMessages = (state = [], action) => {
    if(action.type === 'SET_ALL_QUESTIONS') {
        return action.payload;
    }
        return state;
  };
  
  export default allMessages;