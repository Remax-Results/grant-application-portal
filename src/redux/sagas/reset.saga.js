import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sendReset(action){
  try{
    const response = yield axios.post(`/api/application`, action.payload);
  }
  catch(error){
    console.log('postApplication saga failed appSaga', error);
  }
}

//--------------------WATCHER SAGA---------------------------//
function* resetSaga() {
    yield takeLatest('SEND_RESET', sendReset);
  }
  
  export default resetSaga;