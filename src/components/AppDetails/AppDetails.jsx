import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Col, Row, Table, Button, Modal, InputGroup, FormControl, Dropdown} from 'react-bootstrap';
import TitleCard from './TitleCard/TitleCard.jsx';
import ScoreComponent from './Scoring/ScoreComponent.jsx';
import Notes from './Notes/Notes.jsx';
import Sidebar from './Sidebar/Sidebar';
import './AppDetails.css';


export default function AppDetails(){
    const history = useHistory();
    const {id} = useParams();
    const dispatch = useDispatch();
    const qANDa = useSelector(state => state.qANDa);
    const reviewStatus = useSelector(state=>state.reviewStatus);
    const detailsData = useSelector(state => state.detailsData);
    const notes = useSelector(state => state.notes);
    
    useEffect(() => {dispatch({type: 'FETCH_DETAILS_DATA', payload: id})}, [dispatch]);
    return(
        <>
        <Sidebar />
        <Container className='container' style={{backgroundColor:'#CECECE'}}>
            <TitleCard />
            {qANDa.length > 0 && <ScoreComponent qANDa = {qANDa} />}
            <Notes notes = {notes} detailsData={detailsData}/>
            <Container>
                <Row>
                    <Col>
                        <Dropdown
                            onSelect={(event) => {dispatch({type:'UPDATE_STATUS', payload:{status: event, id:detailsData.id}})}}
                        >
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Set Review Status
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {reviewStatus && reviewStatus.map((rs)=>(<Dropdown.Item eventKey={rs.id}>{rs.status}</Dropdown.Item>))}
                        </Dropdown.Menu>    
                        </Dropdown>
                    </Col>
                    <Col><Button onClick={()=>{history.push(`/report/${id}`)}}>View Printable Report</Button></Col>
                    <Col><Button onClick={()=>{history.push('/admin')}}>Back to Admin Main Page</Button></Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}