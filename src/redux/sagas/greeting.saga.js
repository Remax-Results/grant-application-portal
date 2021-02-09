import { actionChannel, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchActiveGreeting(){
    const response = yield axios.get(`/api/greeting/active`);
    yield put({type:'SET_ACTIVE_GREETING', payload: response.data});
}

function* fetchAllGreetings(){
    yield put({type: 'FETCH_ALL_HEADERS'});
    yield put({type: 'FETCH_ALL_MESSAGES'});
}

function* fetchAllHeaders(){
    const response = yield axios.get(`/api/greeting/header`);
    yield put({type:'SET_ALL_HEADERS', payload: response.data});
}

function* fetchAllMessages(){
    const response = yield axios.get(`api/greeting/message`);
    yield put({type:'SET_ALL_MESSAGES', payload: response.data});
}

//--------------------WATCHER SAGA---------------------------//
function* greetingSaga() {
   yield takeLatest('FETCH_ACTIVE_GREETING', fetchActiveGreeting);
   yield takeLatest('FETCH_ALLGREETINGS', fetchAllGreetings);
   yield takeLatest('FETCH_ALL_HEADERS', fetchAllHeaders);
   yield takeLatest('FETCH_ALL_MESSAGES', fetchAllMessages);
}

export default greetingSaga;