import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchActiveQuestions() { 
    const response = yield axios.get(`/api/question/active`);
    yield put({ type:'SET_ACTIVE_QUESTIONS', payload: response.data });
}

function* postNewQuestion(action) {
    yield axios.post(`/api/question`, action.payload);
}

function* changeQuestionStatus(action) {
    yield axios.put(`/api/question/${action.payload}`);
}

function* deleteQuestion(action) {
    yield axios.delete(`/api/question/${action.payload}`);
}

function* fetchQandA(action) {
    const response = yield axios.get(`/api/question/${action.payload}`);
    yield put({type:'SET_Q_AND_A', payload: response.data});
}

//--------------------WATCHER SAGA---------------------------//
function* grantWindowSaga() {
  yield takeLatest('FETCH_ACTIVE_QUESTIONS', fetchActiveQuestions);
  yield takeLatest('POST_NEW_QUESTION', postNewQuestion);
  yield takeLatest('CHANGE_QUESTION_STATUS', changeQuestionStatus);
  yield takeLatest('DELETE_QUESTION', deleteQuestion);
  yield takeLatest('FETCH_Q_AND_A', fetchQandA);
}

export default grantWindowSaga;