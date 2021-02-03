import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchStatusDropdown(action){
    const response = yield axios.get(`/api/review-status/`);
    yield put({type:'SET_REVIEW_STATUS', payload: response.data});
}

function* fetchCurrentStatus(action){
  console.log('in fetchCurrentStatus statusSaga line 11', action.payload);
  const response = yield axios.get(`/api/application/status/${action.payload}`);
  yield put({type:'SET_CURRENT_STATUS', payload: response.data});
}

//--------------------WATCHER SAGA---------------------------//
function* reviewStatusSaga() {
  yield takeLatest('FETCH_STATUS_DROPDOWN', fetchStatusDropdown);
  yield takeLatest('FETCH_CURRENT_STATUS', fetchCurrentStatus)
}

export default reviewStatusSaga;
