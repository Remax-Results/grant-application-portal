import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function PreviousApplications() {
    const dispatch = useDispatch();
    const [editMode, changeEditMode] = useState(false)

    // Reducer for the current grant window.
    const currentWindow = useSelector(state => state.currentWindow);

    // Fetch the previous grant windows to populate the table.
    useEffect(() => {
        dispatch({type: 'FETCH_PREVIOUS_APPLICATIONS'})
    }, [dispatch])

    return (
        <h2>Inside Previous Applications</h2>
  );
}