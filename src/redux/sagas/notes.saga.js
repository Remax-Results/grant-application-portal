import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchNotes(action){
    const response = yield axios.get(`/api/notes/`);
    yield put({type: 'SET_NOTES', payload: response.data});
}

function* postNote(action){
  yield axios.post(`/api/notes/`, action.payload);
}

function* updateNote(action){
    yield axios.put(`api/notes/${action.payload}`)
}

//--------------------WATCHER SAGA---------------------------//
function* notesSaga() {
  yield takeLatest('FETCH_NOTES', fetchNotes);
  yield takeLatest('POST_NOTE', postNote);
  yield takeLatest('UPDATE_NOTE', updateNote);
}

export default notesSaga;
