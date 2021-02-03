import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Col, Row, Table, Button, Modal, InputGroup, FormControl} from 'react-bootstrap';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Score from './Score.jsx';
import NotesTable from './NotesTable.jsx';


export default function AppDetails(){
    const {id} = useParams();
    const [show, setShow] = useState(false);
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
                <Button onClick={(event)=>{setShow(true)}}>Create New Note</Button>
                <Modal
                    show={show}
                    onHide={(event)=>{setShow(false)}}
                    backdrop="static"
                    keyboard={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Make a note</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl as="textarea" rows="10" aria-label="With textarea" />
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={event=>setShow(false)}>
                            Cancel
                        </Button>
                        <Button onClick={event=>setShow(false)} variant="primary">Save</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </Container>
    )
}