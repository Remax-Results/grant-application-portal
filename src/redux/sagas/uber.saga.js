import { put, takeLatest } from 'redux-saga/effects';


function* fetchFocusAreaQuestion(){
  yield put({ type: 'FETCH_ALL_QUESTIONS' });
  yield put({ type: 'FETCH_FOCUS_AREA' });
}

//--------------------WATCHER SAGA---------------------------//
function* uberSaga() {
  yield takeLatest('FETCH_FOCUS_QUESTION', fetchFocusAreaQuestion);
}

export default uberSaga;