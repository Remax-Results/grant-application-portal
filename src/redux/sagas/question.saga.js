import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchActiveQuestions() { 
    const response = yield axios.get(`/api/question/active`);
    yield put({ type:'SET_ACTIVE_QUESTIONS', payload: response.data });
}

function* fetchAllQuestions() { 
    const response = yield axios.get(`/api/question`);
    yield put({ type:'SET_ALL_QUESTIONS', payload: response.data });
}

function* postNewQuestion(action) {
    
    yield axios.post(`/api/question`, action.payload);
    yield put({ type:'FETCH_ALL_QUESTIONS' });

}

function* changeQuestionStatus(action) {
    const { questionId, newStatus } = action.payload;
    yield axios.put(`/api/question/question-status/${questionId}`, {newStatus: newStatus});
    yield put({ type:'FETCH_ALL_QUESTIONS' });

}

function* changeQuestionText(action) {
    const { questionId, newText } = action.payload;
    yield axios.put(`/api/question/question-text/${questionId}`, {newText: newText});
    yield put({ type:'FETCH_ALL_QUESTIONS' });
}

function* deleteQuestion(action) {
    yield axios.delete(`/api/question/${action.payload}`);
}

function* fetchBudgetWording() { 
    const response = yield axios.get(`/api/budget-wording`);
    yield put({ type:'SET_BUDGET_WORDING', payload: response.data });
}

function* changeBudgetWording(action) {
    const { updatedWording } = action.payload;
    yield axios.put(`/api/budget-wording`, {updatedWording: updatedWording});
    yield put({ type:'FETCH_BUDGET_WORDING' });
}


function* fetchQandA(action) {
    const response = yield axios.get(`/api/question/${action.payload}`);
    yield put({type:'SET_Q_AND_A', payload: response.data});
}

//--------------------WATCHER SAGA---------------------------//
function* grantWindowSaga() {
    yield takeLatest('FETCH_ALL_QUESTIONS', fetchAllQuestions);
    yield takeLatest('FETCH_ACTIVE_QUESTIONS', fetchActiveQuestions);
    yield takeLatest('FETCH_BUDGET_WORDING', fetchBudgetWording);
    yield takeLatest('CHANGE_BUDGET_WORDING', changeBudgetWording);
    yield takeLatest('POST_NEW_QUESTION', postNewQuestion);
    yield takeLatest('CHANGE_QUESTION_STATUS', changeQuestionStatus);
    yield takeLatest('CHANGE_QUESTION_TEXT', changeQuestionText);
    yield takeLatest('DELETE_QUESTION', deleteQuestion);
    yield takeLatest('FETCH_Q_AND_A', fetchQandA);
}

export default grantWindowSaga;