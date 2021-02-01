import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchApplication(action){
    const response = yield axios.get(`/api/application/${action.payload}`);
    yield put({type:'SET_APPLICATION', payload: response.data});
}

function* postApplication(action){
    yield axios.post(`/api/application`, action.payload);
}

//--------------------WATCHER SAGA---------------------------//
function* applicationSaga() {
  yield takeLatest('FETCH_APPLICATION', fetchApplication);
  yield takeLatest('POST_APPLICATION', postApplication);
}

export default applicationSaga;
