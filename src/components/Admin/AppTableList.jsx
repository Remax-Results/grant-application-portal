import React from 'react';
import {useDispatch} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

export default function AppTableList(app) {
    const dispatch = useDispatch();
    const goDetails = () => {
        dispatch({type:'FETCH_DETAILS_DATA', payload: app.app.id});
    }

    return(
        <>
        <tr key={app.app.id}>
            <td>{app.app.org_name}</td>
            <td>{app.app.contact_name}</td>
            <td>{app.app.phone}</td>
            <td>{app.app.username}</td>
            <td>{app.app.budget}</td>
            <td>{app.app.focus}</td>
            <td>{app.app.date_received}</td>
            <td>{app.app.status}</td>
            <td><Button onClick={(event)=>{goDetails()}}>Details/Score</Button></td>
        </tr>
        </>
    )
}