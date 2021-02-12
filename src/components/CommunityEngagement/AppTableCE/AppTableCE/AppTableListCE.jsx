import React from 'react';
import {useDispatch} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import moment from 'moment';
import { BiDetail } from "react-icons/bi";

export default function AppTableList(props) {
    const {app} = props;
    const mailText = "mailto:" + app.username;
    const dispatch = useDispatch();
    const history = useHistory();
    const goDetails = async() => {
        await dispatch({type:'FETCH_DETAILS_DATA', payload: app.id});
        history.push(`/appdetails/${app.id}`)
    }

    return(
        <>
        <tr key={app.id}>
            <td>{app.org_name}</td>
            <td>{app.contact_name}</td>
            <td>{app.phone}</td>
            <td><a href={mailText}>{app.username}</a></td>
            <td>{app.budget}</td>
            <td>{app.focus}</td>
            <td>{moment(app.date_received).format('LL')}</td>
            <td>{app.status}</td>
            <td><Button onClick={(event)=>{goDetails()}}>Details/Score <BiDetail/></Button></td>
        </tr>
        </>
    )
}