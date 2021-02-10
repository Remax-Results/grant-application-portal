import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* filterBudget(action){
    const response = yield axios.get(`/api/filter/budget/${action.payload.budgetLow}/${action.payload.budgetHigh}`);
    yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});
}

function* filterDates(action){
    const response = yield axios.get(`/api/filter/dates/${action.payload.startDate}/${action.payload.endDate}`);
    yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});
}

function* filterFocus(action) {
    const response = yield axios.get(`/api/filter/focus/${action.payload}`);
    yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});

}

function* filterStatus(action) {
    const response = yield axios.get(`/api/filter/status/${action.payload}`);
    yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});
}

function* searchTable(action) {
    const response = yield axios.get(`/api/filter/search/${action.payload}`);
    yield put({type: 'SET_APP_TABLE_DATA', payload: response.data});  
}
//--------------------WATCHER SAGA---------------------------//
function* filterSaga() {
    yield takeLatest('FILTER_FOCUS', filterFocus);
    yield takeLatest('FILTER_STATUS', filterStatus);
    yield takeLatest('FILTER_BUDGET', filterBudget);
    yield takeLatest('FILTER_DATES', filterDates);
    yield takeLatest('SEARCH_TABLE', searchTable)
  }
  
  export default filterSaga;