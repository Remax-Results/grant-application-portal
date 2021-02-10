import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Row, Col, Form, FormControl, FormGroup, Button} from 'react-bootstrap';

export default function DisplayList({g}) {
    const dispatch = useDispatch();
    const activeGreeting = useSelector(state => state.activeGreeting);
    const [header, setHeader] = useState(g.header);
    const [message, setMessage] = useState(g.message);
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({type:'UPDATE_GREETING', payload:{header:header, message: message, render_position:g.render_position}});
    }

    return(
            <div key={g.render_position}>
                <Form onSubmit={(event)=>handleSubmit(event)}>
                    <FormGroup as={Row}>
                        <Form.Label Col={2}>Header {g.render_position}</Form.Label>
                        <Col lg={8}>
                            <FormControl
                                
                                aria-label="Header Field"
                                value={header}
                                onChange={((event)=>setHeader(event.target.value))}
                            /> 
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row}>
                        <Form.Label col={2}>Text Area {g.render_position}</Form.Label>
                        <Col lg={8}>
                            <FormControl
                                    as="textarea"
                                    rows={12}
                                    value={message}
                                    onChange={((event)=>setMessage(event.target.value))}
                                />
                        </Col>
                        <Col><Button type="submit" variant="success">Submit Edits</Button><Button variant="danger">Cancel Changes</Button></Col>
                    </FormGroup>
                </Form>
            </div>
    )
}