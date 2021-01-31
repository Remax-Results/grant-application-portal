import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchAppTableData(action){
    const repsonse = yield axios.get(`/api/table/`);

}

function* fetchDetailsData(action){
  const response = yield axios.get(`/api/table/${action.payload}`);
}

//--------------------WATCHER SAGA---------------------------//
function* tableSaga() {
  yield takeLatest('FETCH_APP_TABLE_DATA', fetchAppTableData);
  yield takeLatest('FETCH_DETAILS_DATA', fetchDetailsData);
}

export default tableSaga;
