import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GrantApplicationFormInputCE from '../GrantApplicationFormInputCE/GrantApplicationFormInputCE.jsx';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import './GrantApplicationFormCE.css';



function GrantApplicationForm(props) {

  // hooks
  const questions = useSelector((store) => store.activeQuestion);
  const budgetWording = useSelector((store) => store.budgetWording);
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [budget, setBudget] = useState(0);
  
  const onSubmit = (e) => {
    e.preventDefault();
   
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
              dispatch({ type: 'POST_CE_APPLICATION', 
              payload: { 
                  values: values, 
                  budget: budget
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
    dispatch({ type: 'FETCH_CE_QUESTION' });
    }, [dispatch]
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
          <h2 className="headerRow">Community Engagement Grant Application Form</h2>
        
        <Container className="formContainer">
        <Row>
        <Col>
          <Form>
              {
                questions.map((question) => (
                  <GrantApplicationFormInputCE 
                    key={question.id}
                    questionChanged={questionChanged}
                    value={values[question.id]}
                    question={question}
                    className="form" />
                ))
              }
              <Form.Label htmlFor="budget">{budgetWording.question_wording}</Form.Label>
              <Form.Control
                name="budget"
                type="number"
                onChange={(e) => setBudget(e.target.value)}
              />          
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
