import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Col, Row, Table} from 'react-bootstrap';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Score from './Score.jsx';
import NotesTable from './NotesTable.jsx';


export default function AppDetails(){
    const {id} = useParams();
    let budget = 0;
    const dispatch = useDispatch();
    const detailsData = useSelector(state => state.detailsData);
    const notes = useSelector(state => state.notes);
    const qANDa = useSelector(state => state.qANDa);
    useEffect(() => {dispatch({type: 'FETCH_DETAILS_DATA', payload: id})}, [dispatch]);
    return(
        <Container style={{backgroundColor:'#CECECE'}}>
            <Card style={{backgroundColor:'#1C479A', color: 'white'}}>
                <Card.Header style={{fontSize:'4rem'}}>{detailsData && detailsData.org_name}</Card.Header>
            </Card>
            {qANDa.length > 0 && qANDa.map(q=>(
                <Container style={{backgroundColor:'white'}}>
                    <Row style={{minHeight:'100px', border: '1px solid #303030'}}>
                        <Col style={{backgroundColor:'#1C479A', color: 'white'}}><Question qANDa = {q}/></Col>
                        <Col  xs={8}><Answer qANDa = {q}/></Col>
                        <Col  xs={4}><Score qANDa = {q}/></Col>
                    </Row>
                </Container>
                ))
            }
            <Container>
                <Card style={{backgroundColor:'#1C479A', color: 'white'}}>
                    <Card.Header style={{fontSize:'4rem'}}>
                        <p>Notes</p>
                    </Card.Header>
                </Card>
                <Table>
                    <thead>
                        <tr>
                            <th>Note Preview</th>
                            <th>Date Added</th>
                            <th>View/Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.length > 0 && notes.map(note => (<NotesTable note={note}/>))}
                    </tbody>
                </Table>
            </Container>
        </Container>
    )
}