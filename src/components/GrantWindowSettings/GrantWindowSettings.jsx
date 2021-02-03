import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GrantWindowForm from '../GrantWindowForm/GrantWindowForm.jsx'
import GrantWindowTable from '../GrantWindowTable/GrantWindowTable.jsx'
import {Button} from 'react-bootstrap';
import moment from 'moment'

export default function GrantWindowSettings(props) {

  const dispatch = useDispatch();
  // Reducer for the current grant window.
  const currentWindow = useSelector(state => state.currentWindow);

  useEffect(() => {
    dispatch({type: 'FETCH_PREVIOUS_GRANT_WINDOWS'})
  }, [])

  return (
    <div>
      {JSON.stringify(currentWindow)}
      <h2>Grant Window Settings</h2>
      {currentWindow ? 
      <div className ="current-grant-window-info">
        <h3>Current Grant Window runs from {moment(currentWindow.start_date).format('LL')} to {moment(currentWindow.end_date).format('LL')} with a budget of {currentWindow.funds_available}</h3>
        <h4>Number of applications: {currentWindow.app_count}</h4>
        <Button>Edit Current Grant Window</Button>
        <Button>Close Current Grant Window</Button>
      </div>
      :
      <GrantWindowForm />
      }
      <div>
        <GrantWindowTable />
      </div>
    </div>
  );
}
