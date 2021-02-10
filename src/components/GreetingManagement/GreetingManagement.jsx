import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container, Row} from 'react-bootstrap';
import DisplayList from './DisplayList.jsx';

export default function GreetingManagement() {
    const dispatch = useDispatch();
    const greeting = useSelector(state => state.greeting);
    useEffect(() => {
        dispatch({type: 'FETCH_GREETING'})
    }, [dispatch])
          
    return (

        <Container style={{textAlign:'center'}}>
                <h2>Set Landing Page Information</h2>
            <Container style={{backgroundColor:'white'}}>
                {greeting.map((g)=> (<DisplayList g={g}/>))}
            </Container>
       </Container>
    )
}