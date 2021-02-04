import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



export default function QuestionManagement() {

  const dispatch = useDispatch();
  const [editMode, changeEditMode] = useState(false)

  // Reducer for the current grant window.
  const currentWindow = useSelector(state => state.currentWindow);

  // Fetch the previous grant windows to populate the table.
  useEffect(() => {
    dispatch({type: 'FETCH_ALL_QUESTIONS'})
  }, [])

  return (
    <div>
      <h2>QuestionManagement</h2>
    </div>
  );
}
