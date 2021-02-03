import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import currentWindow from './currentWindow.reducer';
import application from './application.reducer';
import appTableData from './appTableData.reducer';
import detailsData from './detailsData.reducer';
import reviewStatus from './reviewStatus.reducer';
import notes from './notes.reducer';
import allWindows from './allWindows.reducer';
import question from './question.reducer';
import qANDa from './qANDa.reducer';

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  currentWindow,
  application,
  appTableData,
  detailsData,
  reviewStatus,
  notes,
  allWindows,
  question,
  qANDa,
});

export default rootReducer;
