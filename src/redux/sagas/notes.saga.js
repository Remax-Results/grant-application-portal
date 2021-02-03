import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteNote(action){
  yield axios.delete(`/api/notes/${action.payload.note_id}`);
  yield put({type:'FETCH_NOTES', payload: action.payload.app_id});
}

function* fetchNotes(action){
    const response = yield axios.get(`/api/notes/${action.payload}`);
    yield put({type: 'SET_NOTES', payload: response.data});
}

function* postNote(action){
  yield axios.post(`/api/notes/`, action.payload);
  yield put({type: 'FETCH_NOTES', payload: action.payload.app_id});
}

function* updateNote(action){
    yield axios.put(`api/notes/${action.payload}`)
}

//--------------------WATCHER SAGA---------------------------//
function* notesSaga() {
  yield takeLatest('FETCH_NOTES', fetchNotes);
  yield takeLatest('POST_NOTE', postNote);
  yield takeLatest('UPDATE_NOTE', updateNote);
  yield takeLatest('DELETE_NOTE', deleteNote);
}

export default notesSaga;
