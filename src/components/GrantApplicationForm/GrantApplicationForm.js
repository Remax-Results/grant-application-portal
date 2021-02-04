import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GrantApplicationFormInput from '../GrantApplicationFormInput/GrantApplicationFormInput';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import './GrantApplicationForm.css';



function GrantApplicationForm(props) {

  // hooks
  const questions = useSelector((store) => store.activeQuestion);
  const focusArea = useSelector((store) => store.focusArea);
  const user = useSelector((store) => store.user);
  const grantWindow = useSelector((store) => store.currentWindow);
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [focusAreaId, setFocusAreaId] = useState(0);
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('current values are....', values);
    // send data to server
    
          swal({
            title: "Does the above information look correct to you?",
            text: "Please take a moment to double check your application if you are unsure.",
            icon: "info",
            buttons: true,
            dangerMode: false,
          })
          .then((willSubmit) => {
            if (willSubmit) {
              dispatch({ type: 'POST_APPLICATION', 
              payload: { 
                  values: values, 
                  user_id: user.id, 
                  grant_window_id: grantWindow.id, 
                  focus_area_id: focusAreaId
                } });
              swal("Great! Your application has been submitted.", {
                icon: "success",
              });
            } else {
              swal("Hmm... something went wrong. Please try again.");
            }
          });
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_FOCUS_QUESTION' });
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
  

  return (
    <>
        <Container>
          <h2 className="headerRow">Grant Application Form</h2>
        
        <Container className="formContainer">
        <Row>
        <Col>
          <Form>
              {
                questions.map((question) => (
                  <GrantApplicationFormInput 
                    key={question.id}
                    questionChanged={questionChanged}
                    value={values[question.id]}
                    question={question}
                    className="form" />
                ))
              }
              <p>Please select your area of focus from the list.</p>
              <Form.Control as="select" onChange={(e) => setFocusAreaId(e.target.value)}>
                <option>Area of Focus</option>
                  {
                    focusArea.map((area) => (
                      <option key={area.id} value={area.id}>{area.focus}</option>
                  ))
                  }
              </Form.Control>
              <br />
              <Button variant="secondary" onClick={onSubmit}>Submit Grant Application</Button>
          </Form>
        </Col>
        </Row>
      </Container>
      </Container>
    </>
  );
}

export default GrantApplicationForm;
