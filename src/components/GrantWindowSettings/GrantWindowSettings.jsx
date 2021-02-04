import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GrantWindowForm from '../GrantWindowForm/GrantWindowForm.jsx'
import GrantWindowTable from '../GrantWindowTable/GrantWindowTable.jsx'
import GrantWindowEdit from '../GrantWindowEdit/GrantWindowEdit.jsx'
import {Button} from 'react-bootstrap';
import moment from 'moment'
import './GrantWindowSettings.css'


export default function GrantWindowSettings(props) {

  const dispatch = useDispatch();
  const [editMode, changeEditMode] = useState(false)

  // Reducer for the current grant window.
  const currentWindow = useSelector(state => state.currentWindow);

  // Function to close the current grant window if there is one.
  const closeWindow = () => {
    console.log('inside closeWindow')
    dispatch({type: 'CLOSE_WINDOW', payload: currentWindow.id})
  }

  // Fetch the previous grant windows to populate the table.
  useEffect(() => {
    dispatch({type: 'FETCH_PREVIOUS_GRANT_WINDOWS'})
  }, [])

  return (
    <div>
      {/* {JSON.stringify(currentWindow)} */}
      {currentWindow ?
      <>
        {editMode ? 
          <GrantWindowEdit 
          changeEditMode={changeEditMode} 
          editMode={editMode}
          currentWindow = {currentWindow} />
          :
          <div className ="current-grant-window-info">
            <h3>Current Grant Window runs from {moment(currentWindow.start_date).format('LL')} to {moment(currentWindow.end_date).format('LL')}</h3>
            <h4>Budget: {currentWindow.funds_available}</h4>
            <h4>Number of applications: {currentWindow.app_count}</h4>
            <Button onClick={(event)=>{changeEditMode(!editMode)}}>Edit Current Grant Window</Button>
            <Button onClick={(event)=>{closeWindow()}}>Close Current Grant Window</Button>
          </div>

        } 
      </>
      :
      <GrantWindowForm />
      }
      <div>
        <GrantWindowTable />
      </div>
    </div>
  );
}
