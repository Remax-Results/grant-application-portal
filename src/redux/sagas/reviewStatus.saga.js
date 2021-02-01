import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchStatusDropdown(action){
    const response = yield axios.get(`/api/review-status/`);
    yield put({type:'SET_REVIEW_STATUS', payload: response.data});
}


//--------------------WATCHER SAGA---------------------------//
function* reviewStatusSaga() {
  yield takeLatest('FETCH_STATUS_DROPDOWN', fetchStatusDropdown);
}

export default reviewStatusSaga;
