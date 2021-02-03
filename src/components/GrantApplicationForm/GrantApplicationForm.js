import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GrantApplicationFormInput from '../GrantApplicationFormInput/GrantApplicationFormInput';
import { Form, Container, Row, Col, Button, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function GrantApplicationForm(props) {

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('current values are....', values);
    // send data to server
    dispatch({ type: 'POST_APPLICATION', payload: values });
  }


  useEffect(() => {
    dispatch({ type: 'FETCH_FOCUS_AREA' });
    }, []
  );

  // callback provided to components to update the main list of form values
  const questionChanged = (questionId, value) => {
    // use a callback to find the field in the value list and update it
    setValues((currentValues) => {
      currentValues[questionId] = value;
      return currentValues;
    });
  };
  
  // hooks
  const questions = useSelector((store) => store.question);
  const focusArea = useSelector((store) => store.focusArea);
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  

  return (
    <>
      <Container>
        <Row>
          <h2>Grant Application Form</h2>
        </Row>
        <Row>
        <Col>
        {JSON.stringify(values)}
          <Form>
              {
                questions.map((question) => (
                  <GrantApplicationFormInput 
                    key={question.id}
                    questionChanged={questionChanged}
                    value={values[question.id]}
                    question={question} />
                ))
              }
              <Form.Control as="select">
                <option>Area of Focus</option>
                  {
                    focusArea.map((area) => (
                      <option key={area.id}>{area.focus}</option>
                  ))
                  }
              </Form.Control>  
              <Button variant="secondary" onClick={onSubmit}>Submit Grant Application</Button>
          </Form>
        </Col>
        </Row>
      </Container>
    </>
  );
}

export default GrantApplicationForm;
