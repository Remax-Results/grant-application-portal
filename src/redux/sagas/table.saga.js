import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchAppTableData(action){
    const response = yield axios.get(`/api/table/`);
    yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});

}

function* fetchDetailsData(action){
  const response = yield axios.get(`/api/table/${action.payload}`);
  yield put({type:'SET_DETAILS_DATA', payload: response.data});
  yield put({type:'FETCH_ALL_QUESTIONS'});
}

//--------------------WATCHER SAGA---------------------------//
function* tableSaga() {
  yield takeLatest('FETCH_APP_TABLE_DATA', fetchAppTableData);
  yield takeLatest('FETCH_DETAILS_DATA', fetchDetailsData);
}

export default tableSaga;
