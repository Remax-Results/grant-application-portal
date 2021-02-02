import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';



function GrantApplicationForm(props) {
  
  // hooks
  const questions = useSelector((store) => store.question);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Grant Application Form</h2>

      <Form>
          {
            questions.map((question) => (
              <Form.Group key={question.id} controlId={question.question_text}>
                <Form.Label>{question.question_text}</Form.Label>
                <Form.Control type={question.question_text} placeholder={question.question_text} />
              </Form.Group>
            ))
          }
      </Form>
    </div>
  );
}

export default GrantApplicationForm;
