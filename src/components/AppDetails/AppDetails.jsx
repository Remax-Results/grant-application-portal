import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row, Button} from 'react-bootstrap';
import TitleCard from './TitleCard/TitleCard.jsx';
import ScoreComponent from './Scoring/ScoreComponent.jsx';
import Notes from './Notes/Notes.jsx';
import Sidebar from './Sidebar/Sidebar';
import './AppDetails.css';

import UpdateStatus from './UpdateStatus/UpdateStatus.jsx';
import DetailsSubheader from './DetailsSubheader/DetailsSubheader.jsx';

export default function AppDetails(){
    const history = useHistory();
    const {id} = useParams();
    const dispatch = useDispatch();
    const qANDa = useSelector(state => state.qANDa);
    const detailsData = useSelector(state => state.detailsData);
    const notes = useSelector(state => state.notes);
    
    useEffect(() => {dispatch({type: 'FETCH_DETAILS_DATA', payload: id})}, [dispatch, id]);
    return(
        <>
        <Sidebar />
        <Container className='container' style={{backgroundColor:'#CECECE'}}>
            <TitleCard />
            <DetailsSubheader details={detailsData}/>
            {qANDa.length > 0 && <ScoreComponent qANDa = {qANDa} />}
            <Notes notes = {notes} detailsData={detailsData}/>
            <Container>
                <Row>
                    <UpdateStatus />
                    <Col><Button onClick={()=>{history.push(`/report/${id}`)}}>View Printable Report</Button></Col>
                    <Col><Button onClick={()=>{history.push('/admin')}}>Back to Admin Main Page</Button></Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}