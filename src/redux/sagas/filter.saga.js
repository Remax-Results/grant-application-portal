import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* filterFocus(action) {
    const response = yield axios.get(`/api/filter/focus/${action.payload}`);
    yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});

}

function* filterStatus(action) {
    const response = yield axios.get(`/api/filter/status/${action.payload}`);
    yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});
}
//--------------------WATCHER SAGA---------------------------//
function* filterSaga() {
    yield takeLatest('FILTER_FOCUS', filterFocus);
    yield takeLatest('FILTER_STATUS', filterStatus);
  }
  
  export default filterSaga;