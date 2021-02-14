import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PreviousApplicationsTable from './PreviousApplicationsTable/PreviousApplicationsTable.jsx';


export default function PreviousApplications() {
    const dispatch = useDispatch();

    // Reducer for the current grant window.
    const previousApplications = useSelector(state => state.previousApplications);

    // Fetch the previous grant windows to populate the table.
    useEffect(() => {
        dispatch({type: 'FETCH_PREVIOUS_APPLICATIONS'})
    }, [dispatch])

    return (
        <>
        <h2>Inside Previous Applications</h2>
        <PreviousApplicationsTable/>
        </>
  );
}