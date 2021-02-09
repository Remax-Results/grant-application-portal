import React from 'react';
import {useDispatch, useSelector} from 'react-redux';


export default function GreetingManagement() {
    const dispatch = useDispatch();
          
            // Reducer for all questions.
            const allHeaders = useSelector(state => state.allHeaders);
          
            // Fetch the previous grant windows to populate the table.
            useEffect(() => {
              dispatch({type: 'FETCH_ALL_HEADERS'})
            }, [dispatch])
          
    return (
        <Container>
            <h2>Greeting Manager</h2>
            <Container>
                <ListGroup variant="flush">
                {allQuestion.length > 0 && allQuestion.map(question => 
                    (<Question key={question.id} question={question}/>))}
                </ListGroup>
            </Container>
            <AddQuestionForm />
       </Container>
    )
}