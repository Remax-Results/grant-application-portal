import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function GrantApplicationForm(props) {
  
  // hooks
  const questions = useSelector((store) => store.question);
  const areaOfFocus = useSelector((store) => store.focusArea);
  const dispatch = useDispatch();

  return (
    <>
      <Container>
        <Row>
          <h2>Grant Application Form</h2>
        </Row>
        <Row>
        <Col>
          <Form>
              {
                questions.map((question) => (
                  <Form.Group key={question.id} controlId={question.question_text}>
                    <Form.Label>{question.question_text}</Form.Label>
                    <Form.Control type={question.question_text} placeholder={question.question_text} />
                  </Form.Group>
                ))
              }
              <Button variant="secondary" type="submit">Submit Grant Application</Button>
          </Form>
        </Col>
        </Row>
      </Container>
    </>
  );
}

export default GrantApplicationForm;
