import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchFocusArea(action){
  const response = yield axios.get(`/api/focus`);
  yield put({ type: 'SET_FOCUS_AREA'});
}


//--------------------WATCHER SAGA---------------------------//
function* focusAreaSaga() {
  yield takeLatest('FETCH_FOCUS_AREA', fetchFocusArea);
}

export default focusAreaSaga;
