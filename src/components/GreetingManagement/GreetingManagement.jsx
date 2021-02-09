import React from 'react';

export default function GreetingManagement() {
    const dispatch = useDispatch();
          
            // Reducer for all questions.
            const allQuestion = useSelector(state => state.allQuestion);
          
            // Fetch the previous grant windows to populate the table.
            useEffect(() => {
              dispatch({type: 'FETCH_ALL_QUESTIONS'})
            }, [dispatch])
          
    return (
              <div className="question-manager">
                <h2>Question Manager</h2>
                <Container>
                  <ListGroup variant="flush">
                    {allQuestion.length > 0 && allQuestion.map(question => 
                      (<Question key={question.id} question={question}/>))}
                  </ListGroup>
                </Container>
                <AddQuestionForm />
              </div>
    )
}