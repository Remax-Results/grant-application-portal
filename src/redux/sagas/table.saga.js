import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchAppTableData(action){
    const response = yield axios.get(`/api/table/`);
    yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});

}

function* fetchBudget(action){
  const response = yield axios.get(`/api/table/budget/${action.payload}`);
  yield put({type:'SET_BUDGET', payload: response.data});
}

function* fetchDetailsData(action){
  const response = yield axios.get(`/api/table/${action.payload}`);
  yield put({type:'SET_DETAILS_DATA', payload: response.data});
  yield put({type:'FETCH_Q_AND_A', payload: action.payload});
  yield put({type:'FETCH_NOTES', payload: action.payload});
  yield put({type:'FETCH_STATUS_DROPDOWN'});
  yield put({type:'FETCH_BUDGET', payload: action.payload});
}

function* sortOrgNameAsc(action){
  const response = yield axios.get(`/api/sort/org`);
  yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});
}

function* sortOrgNameDesc(action){
  const response = yield axios.get(`/api/sort/org/desc`);
  yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});
}


//--------------------WATCHER SAGA---------------------------//
function* tableSaga() {
  yield takeLatest('FETCH_APP_TABLE_DATA', fetchAppTableData);
  yield takeLatest('FETCH_DETAILS_DATA', fetchDetailsData);
  yield takeLatest('FETCH_BUDGET', fetchBudget);
  yield takeLatest('SORT_ORG_NAME_DESC', sortOrgNameDesc);
  yield takeLatest('SORT_ORG_NAME_ASC', sortOrgNameAsc);
}

export default tableSaga;
