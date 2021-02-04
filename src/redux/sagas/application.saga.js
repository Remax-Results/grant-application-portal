import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchApplication(action){
    const currentWindow = yield axios.get(`/api/grant-window/current-window`);
    console.log(currentWindow.data);
    const response = yield axios.get(`/api/app-check/${currentWindow.data.id}`);
    yield put({type:'SET_APPLICATION', payload: response.data});
}

function* postApplication(action){
    yield axios.post(`/api/application`, action.payload);
    yield put ({ type: 'FETCH_APPLICATION' });
}

//--------------------WATCHER SAGA---------------------------//
function* applicationSaga() {
  yield takeLatest('FETCH_APPLICATION', fetchApplication);
  yield takeLatest('POST_APPLICATION', postApplication);
}

export default applicationSaga;
