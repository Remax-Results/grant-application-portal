import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchAllWindows(action) {
    const response = yield axios.get(`/api/grant-window`);
    yield put({type:'SET_ALL_WINDOWS', payload: response.data});
}

function* fetchCurrentWindow(action){
    const response = yield axios.get(`/api/grant-window/current-window`);
    yield put({type: 'SET_CURRENT_WINDOW', payload: response.data});
}

function* postGrantWindow(action) {
    yield axios.post(`/api/grant-window`, action.payload);
}

function* updateGrantWindow(action) {
    yield axios.put(`/api/grant-window/${action.payload}`);
}


//--------------------WATCHER SAGA---------------------------//
function* grantWindowSaga() {
  yield takeLatest('FETCH_CURRENT_WINDOW', fetchCurrentWindow);
  yield takeLatest('FETCH_ALL_WINDOWS', fetchAllWindows);
  yield takeLatest('POST_GRANT_WINDOW', postGrantWindow);
  yield takeLatest('UPDATE_GRANT_WINDOW', updateGrantWindow);
}

export default grantWindowSaga;
