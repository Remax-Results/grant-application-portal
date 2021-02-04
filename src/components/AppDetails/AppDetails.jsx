import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Col, Row, Table, Button, Modal, InputGroup, FormControl, Dropdown} from 'react-bootstrap';
import Question from './Question.jsx';
import Answer from './Answer.jsx';
import Score from './Score.jsx';
import NotesTable from './NotesTable.jsx';


export default function AppDetails(){
    const history = useHistory();
    const {id} = useParams();
    const [show, setShow] = useState(false);
    const [newNote, setNewNote] = useState('');
    const dispatch = useDispatch();
    const reviewStatus = useSelector(state=>state.reviewStatus);
    const detailsData = useSelector(state => state.detailsData);
    const notes = useSelector(state => state.notes);
    const qANDa = useSelector(state => state.qANDa);
    const handleSave = async () => {
        setShow(false);
        await dispatch({type:'POST_NOTE', payload: {note:newNote, app_id:detailsData.id}});
        setNewNote('');
    }
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
            <Container style={{backgroundColor: 'white'}}>
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
                            <th>&nbsp;</th>
                            <th>&nbsp;</th>
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
                            <FormControl as="textarea" rows="10" aria-label="With textarea" onChange={event => {setNewNote(event.target.value)}}/>
                        </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={event=>setShow(false)}>
                            Cancel
                        </Button>
                        <Button onClick={event=>handleSave()} variant="primary">Save</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
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
                    <Col><Button onClick={()=>{history.push('/report')}}>View Printable Report</Button></Col>
                    <Col><Button onClick={()=>{history.push('/admin')}}>Back to Admin Main Page</Button></Col>
                </Row>
            </Container>
        </Container>
    )
}