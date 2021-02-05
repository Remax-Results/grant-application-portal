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

function* sortContactDesc(action){
  const response = yield axios.get(`/api/sort/contact/desc`);
  yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});
}

function* sortContactAsc(action){
  const response = yield axios.get(`/api/sort/contact`);
  yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});
}

function* sortBudgetDesc(action){
  const response = yield axios.get(`/api/sort/budget/desc`);
  yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});
}

function* sortBudgetAsc(action){
  const response = yield axios.get(`/api/sort/budget`);
  yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});
}

function* sortFocusAsc(action){
  const response = yield axios.get(`/api/sort/focus`);
  yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});
}

function* sortFocusDesc(action){
  const response = yield axios.get(`/api/sort/focus/desc`);
  yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});
}

function* sortStatusAsc(action){
  const response = yield axios.get(`/api/sort/status/`);
  yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});
}

function* sortStatusDesc(action){
  const response = yield axios.get(`/api/sort/status/desc`);
  yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});
}

//--------------------WATCHER SAGA---------------------------//
function* tableSaga() {
  yield takeLatest('FETCH_APP_TABLE_DATA', fetchAppTableData);
  yield takeLatest('FETCH_DETAILS_DATA', fetchDetailsData);
  yield takeLatest('FETCH_BUDGET', fetchBudget);
  yield takeLatest('SORT_ORG_NAME_DESC', sortOrgNameDesc);
  yield takeLatest('SORT_ORG_NAME_ASC', sortOrgNameAsc);
  yield takeLatest('SORT_CONTACT_ASC', sortContactAsc);
  yield takeLatest('SORT_CONTACT_DESC', sortContactDesc);
  yield takeLatest('SORT_BUDGET_ASC', sortBudgetAsc);
  yield takeLatest('SORT_BUDGET_DESC', sortBudgetDesc);
  yield takeLatest('SORT_FOCUS_ASC', sortFocusAsc);
  yield takeLatest('SORT_FOCUS_DESC', sortFocusDesc);
  yield takeLatest('SORT_STATUS_ASC', sortStatusAsc);
  yield takeLatest('SORT_STATUS_DESC', sortStatusDesc);
}

export default tableSaga;
