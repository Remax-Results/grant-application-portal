import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchFocusArea(action){
    const repsonse = yield axios.get(`/api/focus/`);

}


//--------------------WATCHER SAGA---------------------------//
function* focusAreaSaga() {
  yield takeLatest('FETCH_FOCUS_AREA', fetchFocusArea);
}

export default focusAreaSaga;
