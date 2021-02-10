import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListGroup, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './Question.jsx';
import AddQuestionForm from './AddQuestionForm.jsx';
import BudgetWording from './BudgetWording.jsx';
import FocusArea from './FocusArea.jsx';
import './QuestionManagement.css';



export default function QuestionManagement() {

  const dispatch = useDispatch();

  // Reducers for all questions.
  const allQuestion = useSelector(state => state.allQuestion);
  const budgetWording = useSelector(state => state.budgetWording);
  const focusArea = useSelector(state => state.focusArea);

  // Fetch the previous grant windows to populate the table.
  useEffect(() => {
    dispatch({type: 'FETCH_ALL_QUESTIONS'})
    dispatch({type: 'FETCH_BUDGET_WORDING'})
    dispatch({type: 'FETCH_FOCUS_AREA'})
  }, [dispatch])

  return (
    <div className="question-manager">
      <h2>Question Manager</h2>
      <Container>
        <ListGroup variant="flush">
          {Object.keys(budgetWording).length > 0 &&
            <BudgetWording budgetWording={budgetWording}/>          
          }
        </ListGroup>
        <ListGroup variant="flush">
          {allQuestion.length > 0 && allQuestion.map(question => 
            (<Question key={question.id} question={question}/>))}
        </ListGroup>
        
      <AddQuestionForm />
        <h2>Focus Area Manager</h2>
        <ListGroup variant="flush">
            {focusArea.length > 0 && focusArea.map(focus => (
              <FocusArea key={focus.id} focusArea={focus} />
              ))}
        </ListGroup>
      </Container>
    </div>
  );
}
