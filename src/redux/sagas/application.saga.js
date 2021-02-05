import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchApplication(action){
    const currentWindow = yield axios.get(`/api/grant-window/current-window`);
    console.log('inside fetchApplication', currentWindow.data.id)
    let axiosRoute = '/api/app-check/'
    if (currentWindow.data.id){
      axiosRoute += currentWindow.data.id
    } 
    const response = yield axios.get(axiosRoute);
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
