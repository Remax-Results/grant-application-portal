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
  const budgetWording = useSelector((store) => store.budgetWording);
  const focusArea = useSelector((store) => store.focusArea);
  const user = useSelector((store) => store.user);
  const grantWindow = useSelector((store) => store.currentWindow);
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [focusAreaId, setFocusAreaId] = useState(0);
  const [budget, setBudget] = useState(0);
  const [validated, setValidated] = useState(false);
  
  const onSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    } 
   
    setValidated(true);
    // send data to server
    
          // swal({
          //   title: "Does the above information look correct to you?",
          //   text: "Please take a moment to double check your application if you are unsure.",
          //   icon: "info",
          //   buttons: true,
          //   dangerMode: false,
          // })
          // .then((willSubmit) => {
          //   if (willSubmit) {
              dispatch({ type: 'POST_APPLICATION', 
              payload: { 
                  values: values, 
                  user_id: user.id, 
                  grant_window_id: grantWindow.id, 
                  focus_area_id: focusAreaId,
                  budget: budget
                } });
            //   swal("Great! Your application has been submitted.", {
            //     icon: "success",
            //   });
            // } else {
            //   swal("Hmm... something went wrong. Please try again.");
            // }
          // });
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_FOCUS_QUESTION' });
    }, [dispatch]
  );

  // callback provided to components to update the main list of form values
  const questionChanged = (questionId, value) => {
    // use a callback to find the field in the value list and update it
    setValues({...values, [questionId]: value});
  };
  

  return (
    <>
        <Container>
          <h2 className="headerRow">Grant Application Form</h2>
        
        <Container className="formContainer">
        <Row>
        <Col>
        {JSON.stringify(values)}
          <Form noValidate validated={validated} onSubmit={onSubmit}>
              {
                questions.map((question, i) => (
                  <GrantApplicationFormInput 
                    key={question.id}
                    questionChanged={questionChanged}
                    value={values[question.id]}
                    question={question}
                    className="form" />
                ))
              }
              <Form.Group>
                <Form.Label htmlFor="budget">{budgetWording.question_wording}</Form.Label>
                <Form.Control
                  required
                  name="budget"
                  type="number"
                  onChange={(e) => setBudget(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Please fill out the question.
                </Form.Control.Feedback>
              </Form.Group>
              <p>Please select your area of focus from the list.</p>
              <Form.Group>
                <Form.Control 
                  as="select" 
                  onChange={(e) => setFocusAreaId(e.target.value)}
                  required
                  custom
                >
                  <option key={'empty'} value={''}>...</option>
                    {
                      focusArea.filter(focus=>focus.id!=5).map((area) => (
                        <option key={area.id} value={area.id}>{area.focus}</option>
                    ))
                    }
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select a focus area.
                </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Button onClick={onSubmit}>Submit Grant Application</Button>
          </Form>
        </Col>
        </Row>
      </Container>
      </Container>
    </>
  );
}

export default GrantApplicationForm;
