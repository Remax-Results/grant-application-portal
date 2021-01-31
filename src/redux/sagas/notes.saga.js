import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchNotes(action){
    const repsonse = yield axios.get(`/api/notes/`);

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
