import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function GrantApplicationFormInput ({ question, questionChanged, value }) {




    return (
        <>
            <Form.Group key={question.id}>
                <Form.Label htmlFor={question.id}>{question.question_text}</Form.Label>
                <Form.Control name={question.id} value={value} placeholder={question.question_text}
                    onChange={(e) => {
                        // Notify the main state of the new value
                        questionChanged(question.id, e.target.value);
                    }} />
            </Form.Group>
        </>
    );
}

export default GrantApplicationFormInput;