import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Row} from 'react-bootstrap';
import DisplayList from './DisplayList.jsx';

export default function GreetingManagement() {
    const dispatch = useDispatch();
          
            // Reducer for all questions.
            const allHeaders = useSelector(state => state.allHeaders);
            const allMessages = useSelector(state => state.allMessages);
            const activeGreeting = useSelector(state => state.activeGreeting);

            // Fetch the previous grant windows to populate the table.
            useEffect(() => {
              dispatch({type: 'FETCH_ALL_GREETINGS'})
            }, [dispatch])
          
    return (

        <Container style={{textAlign:'center'}}>
                <h2>Set Landing Page Information</h2>
            <Container style={{backgroundColor:'white'}}>
                <h3>Current Layout</h3>
                {activeGreeting.map((g)=> (<DisplayList g={g}/>))}
            </Container>
       </Container>
    )
}