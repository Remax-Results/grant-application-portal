import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Col, Row, Table, Button, Modal, InputGroup, FormControl, Dropdown} from 'react-bootstrap';
import ScoreReport from './ScoreReport/ScoreReport.jsx';
import NotesReport from './NotesReport/NotesReport.jsx';

export default function PrintableReport() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const notes = useSelector(state => state.notes);
    const {budget} = useSelector(state => state.budget);
    const {org_name, background, focus, phone, status, username, contact_name} = useSelector(state => state.detailsData);
    const qANDa = useSelector(state => state.qANDa);
    useEffect(() => {dispatch({type: 'FETCH_DETAILS_DATA', payload: id})}, [dispatch]);


    return (
        <Container>
            {org_name && <h1>{org_name}</h1>}
            <p>Contact:</p>
            {contact_name && <p>{contact_name}</p>}
            {username && <p>{username}</p>}
            {phone && <p>{phone}</p>}
            <h3>Organization Background:</h3>
            {background && <p>{background}</p>}
            <h3>Area of Focus:</h3>
            {focus && <p>{focus}</p>}
            <h3>Budget</h3>
            {budget && <p>{budget}</p>}

            <h3>Evaluation</h3>
            {qANDa.length > 0 && qANDa.map((qa) => <ScoreReport qa={qa}/>)}
            <h3>Notes</h3>
            {notes.length > 0 && notes.map((n)=> <NotesReport n={n}/>)}
            <Button onClick={()=>{history.push('/admin')}}>Back to Admin Main Page</Button>
        </Container>
        
        )
}