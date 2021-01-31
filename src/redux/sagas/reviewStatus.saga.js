import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchStatusDropdown(action){
    const repsonse = yield axios.get(`/api/review-status/`);

}


//--------------------WATCHER SAGA---------------------------//
function* reviewStatusSaga() {
  yield takeLatest('FETCH_STATUS_DROPDOWN', fetchStatusDropdown);
}

export default reviewStatusSaga;
