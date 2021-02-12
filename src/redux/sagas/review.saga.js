import { takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* updateScore(action){
    yield axios.put(`/api/review/`, action.payload);
}

function* updateCeScore(action){
  yield axios.put(`/api/review/ce`, action.payload);
}



//--------------------WATCHER SAGA---------------------------//
function* reviewSaga() {
  yield takeLatest('UPDATE_SCORE', updateScore);
  yield takeLatest('UPDATE_CE_SCORE', updateCeScore);
  // yield takeLatest('UPDATE_STATUS', updateStatus);
}

export default reviewSaga;
