import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchAllQuestions() { 
    const response = yield axios.get(`/api/question`);
    yield put({ type:'SET_ALL_QUESTIONS', payload: response.data });
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


//--------------------WATCHER SAGA---------------------------//
function* grantWindowSaga() {
  yield takeLatest('FETCH_ALL_QUESTIONS', fetchAllQuestions);
  yield takeLatest('POST_NEW_QUESTION', postNewQuestion);
  yield takeLatest('CHANGE_QUESTION_STATUS', changeQuestionStatus);
  yield takeLatest('DELETE_QUESTION', deleteQuestion);
}

export default grantWindowSaga;