import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container} from 'react-bootstrap';

export default function GreetingManagement() {
    const dispatch = useDispatch();
          
            // Reducer for all questions.
            const allHeaders = useSelector(state => state.allHeaders);
            const allMessages = useSelector(state => state.allMessages);
          
            // Fetch the previous grant windows to populate the table.
            useEffect(() => {
              dispatch({type: 'FETCH_ALL_GREETINGS'})
            }, [dispatch])
          
    return (
        <Container>
            <h2>Greeting Manager</h2>
            <Container>
                {JSON.stringify(allHeaders, allMessages)}
            </Container>
           
       </Container>
    )
}