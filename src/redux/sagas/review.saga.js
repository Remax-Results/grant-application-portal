import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* updateScore(action){
    yield axios.put(`/api/review/${action.payload}`);
    yield axios.put(`/api/review/status/${action.payload}`);
}



//--------------------WATCHER SAGA---------------------------//
function* reviewSaga() {
  yield takeLatest('UPDATE_SCORE', updateScore);
  yield takeLatest('UPDATE_STATUS', updateStatus);
}

export default reviewSaga;
