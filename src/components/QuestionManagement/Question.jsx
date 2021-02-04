import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ListGroup, Row, Col, Form, Button } from 'react-bootstrap';

export default function Question(props) {

    const dispatch = useDispatch();
    const { question } = props;

    const changeQuestionStatus = (event) => {
        dispatch({type: 'CHANGE_QUESTION_STATUS', payload: {
            questionId: question.id,
            newStatus: event.target.value
        }})
        console.log('inside changeQuestionActive', event.target.value);
    }

    return (
        <div>
            <ListGroup.Item>
                <Row>
                    <Col xs={8}>
                        {question.question_text}
                        {question.active ? 
                        'active'
                        :
                        'disabled'}
                    </Col>
                    <Col xs={1}>
                        <Button size="sm">Edit</Button>
                    </Col>                    
                    <Col xs={3}>
                        <Form>
                            <Form.Group>
                            <Form.Control 
                                size="sm" 
                                as="select"
                                defaultValue={question.active}
                                onChange = {(event)=>{changeQuestionStatus(event)}}
                            >
                                <option value={true}>Active</option>
                                <option value={false}>Disabled</option>
                            </Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>

                </Row>
            </ListGroup.Item>
        </div>
    );
}

