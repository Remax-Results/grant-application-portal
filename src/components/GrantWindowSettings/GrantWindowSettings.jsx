import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GrantWindowForm from '../GrantWindowForm/GrantWindowForm.jsx'
import GrantWindowTable from '../GrantWindowTable/GrantWindowTable.jsx'



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
      {/* {Date.now.toLocaleFormat()} */}
      <h2>Grant Window Settings</h2>
      {currentWindow ? 
      <h3>Current Grant Window runs from {currentWindow.start_date} to {currentWindow.end_date} with a budget of {currentWindow.budget}</h3>
      :
      <GrantWindowForm />
      }
      <div>
        <GrantWindowTable />
      </div>
    </div>
  );
}
