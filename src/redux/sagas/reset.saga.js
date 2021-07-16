import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sendReset(action){
  try{
    const response = yield axios.get(`/api/user/${action.payload.username}`);

    // Check to ensure inputted email exists.
    if (response.data.length > 0){
      // TODO - Potentially send the response instead of forwarding on the payload. Could include more data that way potentially.
      yield put ({type: 'SEND_RESET_EMAIL', payload: action.payload});
    } else {
      yield put ({type: 'EMAIL_DOES_NOT_EXIST'});
    }
  }
  catch(error){
    console.log('sendReset saga failed reset.saga.js', error);
    yield put ({type: 'RESET_CATCH_ALL_SERVER'});
  }
}

function* sendResetEmail(action){
  try{
    yield axios.put(`/api/reset/email/${action.payload.username}`);
    yield put ({type: 'CLEAR_RESET_ERROR'});
    yield put ({type: 'EMAIL_SENT'});
  }
  catch(error){
    console.log('sendResetEmail saga failed reset.saga.js', error);
    yield put ({type: 'RESET_CATCH_ALL_SERVER'});

  }
}

function* fetchResetInfo(action){
  try{

    const {id, token} = action.payload
    // check to ensure the reset token hasn't expired and the user id is correct.
    const check = yield axios.get(`/api/reset/check?id=${id}&token=${token}`);

    // if the check comes back with data, it's correct and the form renders, if not, an expiration message is rendered.
    if (check.data.length > 0){
      yield put({type: 'CORRECT_RESET_PASSWORD_INFO'})
    }
    else{
      yield put({type: 'EXPIRED_RESET_PASSWORD_INFO'})
    }
  }
  catch(error){
    console.log('fetchResetInfo saga failed reset.saga.js', error);
  }
}

function* resetPassword(action){
  try{
    yield axios.put(`/api/reset/`, action.payload);
    yield put ({ type: 'RESET_PASSWORD_SUCCESS'})
  }
  catch(error){
    console.log('sendReset saga failed reset.saga.js', error);
  }
}

//--------------------WATCHER SAGA---------------------------//
function* resetSaga() {
  yield takeLatest('SEND_RESET', sendReset);
  yield takeLatest('SEND_RESET_EMAIL', sendResetEmail);
  yield takeLatest('FETCH_PASSWORD_RESET_INFO', fetchResetInfo);
  yield takeLatest('SEND_FINAL_RESET', resetPassword);
}
  
  export default resetSaga;